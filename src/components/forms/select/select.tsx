import { useState } from 'react';
import { Icon } from '../../icon/icon';
import { tv } from 'tailwind-variants';
import { Portal, Select as SelectPrimitive } from '@ark-ui/react';

type GroupItems = { value: string; label: string }[];

export interface Props {
	options: GroupItems;
	label?: string;
	labelClassName?: string;
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
			'block transition-all duration-200 relative border border-solid border-transparent w-full',
		input:
			'unset-all appearance-none block bg-dark-600 border border-solid border-transparent rounded-md h-10 outline-none text-white text-base transition-all duration-200 placeholder:text-dark-300 text-sm font-sans font-medium flex justify-between items-center gap-3 w-full',
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
					'relative border border-transparent bg-clip-padding before:content-[""] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-1] before:bg-gradient-to-b before:m-[-1px] before:rounded-md before:transition-all before:duration-200 before:ease-in-out to-transparent !border-none from-dark-400/30',
				input: '',
			},
			false: {
				container: '',
				input: '',
			},
		},
		isSuccess: {
			true: {
				container: 'border-success-500',
			},
			false: {
				container: '',
			},
		},
		isError: {
			true: {
				container: 'border-error-500',
			},
			false: {
				container: '',
			},
		},
		isFocus: {
			true: {
				container: 'border-primary-500',
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
			rounded: true,
			class: {
				container: 'before:rounded-full',
			},
		},
		{
			gradient: true,
			isSuccess: false,
			isError: false,
			class: {
				container: 'from-dark-400/30',
			},
		},
		{
			gradient: true,
			isSuccess: true,
			isError: false,
			class: { container: 'from-success-400' },
		},
		{
			gradient: true,
			isSuccess: false,
			isError: true,
			class: {
				container: 'from-error-400',
			},
		},
		{
			gradient: true,
			isFocus: true,
			class: {
				container: 'from-primary-400',
			},
		},
	],
});

export function Select(props: Props) {
	const {
		label,
		labelClassName = '',
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
				onOpenChange={(e) => {
					if (e.open) {
						setIsFocus(true);
					} else {
						setIsFocus(false);
					}
				}}
			>
				{label && (
					<SelectPrimitive.Label className={`${labelText()} ${labelClassName}`}>
						{label}
					</SelectPrimitive.Label>
				)}
				<SelectPrimitive.Control
					className={`${container()} ${inputContainerClassName}`}
				>
					{icon && (
						<Icon name={icon} className={`${iconElement()} ${iconClassName}`} />
					)}
					<SelectPrimitive.Trigger className={input()}>
						<SelectPrimitive.ValueText placeholder={placeholder} />
						<SelectPrimitive.Indicator className='flex items-center justify-center'>
							<Icon name='i-ri:arrow-down-s-line' />
						</SelectPrimitive.Indicator>
					</SelectPrimitive.Trigger>
				</SelectPrimitive.Control>
				<Portal>
					<SelectPrimitive.Positioner>
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
