import { ComponentPropsWithoutRef, useState } from 'react';
import { Icon } from '../../icon/icon';
import { tv } from 'tailwind-variants';
import { Tooltip } from '../../tooltip/tooltip';

export interface Props extends ComponentPropsWithoutRef<'input'> {
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
	suffix?: string;
	prefix?: string;
}

const inputTV = tv({
	slots: {
		container:
			'flex items-center transition-all duration-200 relative w-full bg-dark-600 p-[1px] bg-dark-600 light:bg-light-200 gap-1',
		content: 'bg-dark-600 light:bg-light-200 flex items-center w-full gap-1',
		input:
			'unset-all appearance-none block bg-dark-600 light:bg-light-200 border border-solid border-transparent h-10 outline-none text-white light:text-dark-700 text-base transition-all duration-200 placeholder:text-dark-300 text-sm font-sans font-medium w-full ',
		componentContainer: 'w-full flex flex-col gap-2',
		labelText: 'text-sm font-medium light:text-dark-400',
		successMessageText: 'text-sm font-medium text-success-500',
		errorMessageText: 'text-sm font-medium text-error-500',
		iconElement: '!ml-3',
		suffixElement: 'text-sm font-medium text-dark-300 light:text-dark-500 pr-3',
		prefixElement: 'text-sm font-medium text-dark-300 light:text-dark-500 pl-3',
	},
	variants: {
		suffix: {
			true: {
				input: '!pr-0',
			},
		},
		prefix: {
			true: {
				input: '!pl-0',
			},
		},
		gradient: {
			true: {
				container:
					'bg-gradient-to-b transition-all duration-200 to-transparent from-dark-400/30 light:from-light-400',
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
				content: 'rounded-full',
				input: 'rounded-full',
			},
			false: {
				container: 'rounded-md',
				content: 'rounded-[5px]',
				input: 'rounded',
			},
		},
		icon: {
			true: {
				input: 'pl-0 pr-3',
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

export function Input(props: Props) {
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
		suffix,
		prefix,
		information,
		...rest
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
		suffixElement,
		prefixElement,
	} = inputTV({
		gradient,
		isSuccess,
		isError,
		isFocus,
		rounded,
		icon: !!icon,
		disabled: rest.disabled,
		suffix: !!suffix,
		prefix: !!prefix,
	});

	return (
		<>
			<label className={`${componentContainer()} ${containerClassName}`}>
				{label && (
					<div className='w-full flex gap-2 items-center'>
						<span className={`${labelText()} ${labelClassName}`}>{label}</span>
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
				<div className={`${container()} ${inputContainerClassName}`}>
					<div className={content()}>
						{icon && (
							<Icon
								name={icon}
								className={`${iconElement()} ${iconClassName}`}
							/>
						)}
						{prefix && <span className={prefixElement()}>{prefix}</span>}
						<input
							{...rest}
							className={`${input()} ${rest.className}`}
							onFocus={() => setIsFocus(true)}
							onBlur={() => setIsFocus(false)}
						/>
						{suffix && <span className={suffixElement()}>{suffix}</span>}
						{children}
					</div>
				</div>
			</label>
			{successMessage && (
				<span className={successMessageText()}>{successMessage}</span>
			)}
			{errorMessage && (
				<span className={errorMessageText()}>{errorMessage}</span>
			)}
		</>
	);
}
