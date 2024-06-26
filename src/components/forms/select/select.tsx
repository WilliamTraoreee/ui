import { useState } from 'react';
import { Icon } from '../../icon/icon';
import { tv } from 'tailwind-variants';
import { Portal, Select as SelectPrimitive } from '@ark-ui/react';
import { motion, Variants } from 'framer-motion';
import { Tooltip } from '../../tooltip/tooltip';

type GroupItems = { value: string; label: string }[];

export interface Props {
	options: GroupItems;
	label?: string;
	labelClassName?: string;
	information?: string;
	containerClassName?: string;
	inputContainerClassName?: string;
	isSuccess?: boolean;
	successMessage?: string;
	isError?: boolean;
	errorMessage?: string;
	rounded?: boolean;
	gradient?: boolean;
	icon?: string;
	iconClassName?: string;
	children?: React.ReactNode;
	disabled?: boolean;
	placeholder?: string;
	onValueChange?: (values: GroupItems) => void;
	multiple?: boolean;
}

const inputTV = tv({
	slots: {
		container:
			'flex items-center transition-all duration-200 relative w-full p-[1px] bg-dark-600 light:bg-light-200 gap-1',
		content:
			'bg-dark-600 light:bg-light-200 flex items-center w-full gap-1 rounded-[5px]',
		input:
			'unset-all appearance-none block bg-dark-600 light:bg-light-200 border border-solid border-transparent rounded-md h-10 outline-none text-white text-base transition-all duration-200 placeholder:text-dark-300 text-sm font-sans font-medium flex justify-between items-center gap-3 w-full light:text-dark-700',
		componentContainer: 'w-full flex flex-col gap-2',
		labelText: 'text-sm font-medium',
		successMessageText: 'text-sm font-medium text-success-500',
		errorMessageText: 'text-sm font-medium text-error-500',
		iconElement: 'absolute top-1/2 left-2 -translate-y-1/2',
		itemsGroup:
			'p-3 bg-dark-700 w-80 rounded-md shadow-lg border border-solid border-dark-600 gap-1',
		itemValue:
			'text-sm font-medium h-8 flex px-2 items-center rounded justify-between hover:bg-dark-600 transition-all duration-100 ease-in-out cursor-pointer data-[state="checked"]:bg-primary-500 data-[state="checked"]:hover:bg-primary-500 mb-1 last:mb-0',
	},
	variants: {
		gradient: {
			true: {
				container:
					'!bg-gradient-to-b transition-all duration-200 to-transparent from-dark-400/30',
			},
		},
		isSuccess: {
			true: {
				container: 'bg-success-500',
			},
			false: {
				container: '',
			},
		},
		isError: {
			true: {
				container: 'bg-error-500',
			},
			false: {
				container: '',
			},
		},
		isFocus: {
			true: {
				container: 'bg-primary-500',
			},
			false: {
				container: '',
			},
		},
		rounded: {
			true: {
				container: 'rounded-full',
				input: 'rounded-full',
			},
			false: {
				container: 'rounded-md',
				input: 'rounded-md',
			},
		},
		icon: {
			true: {
				input: 'pl-7 pr-3',
			},
			false: {
				input: 'px-3',
			},
		},
		disabled: {
			true: {
				input: '!text-dark-200',
			},
		},
	},
	compoundVariants: [
		{
			gradient: true,
			isSuccess: false,
			isError: false,
			class: {
				container: 'from-dark-400/30 bg-transparent',
			},
		},
		{
			gradient: true,
			isSuccess: true,
			isError: false,
			class: { container: 'from-success-400 bg-transparent' },
		},
		{
			gradient: true,
			isSuccess: false,
			isError: true,
			class: {
				container: 'from-error-400 bg-transparent',
			},
		},
		{
			gradient: true,
			isFocus: true,
			class: {
				container: 'from-primary-400 bg-transprent',
			},
		},
	],
});

const selectAnimation: Variants = {
	initial: {
		y: 10,
		x: 0,
		opacity: 0,
	},
	in: {
		x: 0,
		y: 0,
		opacity: 1,
		rotate: 0,
		transition: {
			duration: 0.2,
			ease: 'easeInOut',
			type: 'tween',
			stiffness: 60,
		},
	},
	out: {
		x: 0,
		y: 200,
		opacity: 0,
		transition: {
			duration: 0.3,
			stiffness: 100,
			ease: 'easeInOut',
		},
	},
};

export function Select(props: Props) {
	const {
		label,
		labelClassName = '',
		information,
		containerClassName = '',
		inputContainerClassName = '',
		isSuccess,
		successMessage,
		isError,
		errorMessage,
		rounded,
		gradient,
		icon,
		iconClassName = '',
		children,
		disabled,
		options,
		placeholder,
		onValueChange,
		multiple,
	} = props;

	const [isFocus, setIsFocus] = useState(false);

	const {
		container,
		content,
		input,
		componentContainer,
		labelText,
		successMessageText,
		errorMessageText,
		iconElement,
		itemsGroup,
		itemValue,
	} = inputTV({
		gradient,
		isSuccess,
		isError,
		isFocus,
		rounded,
		icon: !!icon,
		disabled: disabled,
	});

	return (
		<>
			<SelectPrimitive.Root
				multiple={multiple}
				items={options}
				onValueChange={(e) => {
					onValueChange?.(e.items);
				}}
				closeOnSelect
				className={`${componentContainer()} ${containerClassName}`}
				disabled={disabled}
				unmountOnExit
				lazyMount
				onOpenChange={(e) => {
					if (e.open) {
						setIsFocus(true);
					} else {
						setIsFocus(false);
					}
				}}
			>
				{label && (
					<div className='w-full flex gap-2 items-center'>
						<SelectPrimitive.Label
							className={`${labelText()} ${labelClassName}`}
						>
							{label}
						</SelectPrimitive.Label>
						{information && (
							<Tooltip content={information}>
								<span className='flex items-center'>
									<Icon
										name='i-ri:information-line'
										className='text-dark-200'
									/>
								</span>
							</Tooltip>
						)}
					</div>
				)}
				<SelectPrimitive.Control
					className={`${container()} ${inputContainerClassName}`}
				>
					<div className={content()}>
						{icon && (
							<Icon
								name={icon}
								className={`${iconElement()} ${iconClassName}`}
							/>
						)}
						<SelectPrimitive.Trigger className={input()}>
							<SelectPrimitive.ValueText placeholder={placeholder} />
							<SelectPrimitive.Indicator className='flex items-center justify-center'>
								<Icon name='i-ri:arrow-down-s-line' />
							</SelectPrimitive.Indicator>
						</SelectPrimitive.Trigger>
					</div>
				</SelectPrimitive.Control>

				<Portal>
					<SelectPrimitive.Positioner>
						<motion.div
							variants={selectAnimation}
							initial='initial'
							animate='in'
							exit='out'
						>
							<SelectPrimitive.Content className={`${itemsGroup()}`}>
								{options.map((item) => (
									<SelectPrimitive.Item
										key={item.value}
										item={item.value}
										className={`${itemValue()}`}
									>
										<SelectPrimitive.ItemText>
											{item.label}
										</SelectPrimitive.ItemText>
										<SelectPrimitive.ItemIndicator>
											✓
										</SelectPrimitive.ItemIndicator>
									</SelectPrimitive.Item>
								))}
							</SelectPrimitive.Content>
						</motion.div>
					</SelectPrimitive.Positioner>
				</Portal>
			</SelectPrimitive.Root>
			{children}
			{successMessage && (
				<span className={successMessageText()}>{successMessage}</span>
			)}
			{errorMessage && (
				<span className={errorMessageText()}>{errorMessage}</span>
			)}
		</>
	);
}
