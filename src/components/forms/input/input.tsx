import { ComponentPropsWithoutRef, useState } from 'react';
import { Icon } from '../../icon/icon';
import { tv } from 'tailwind-variants';

interface Props extends ComponentPropsWithoutRef<'input'> {
	label?: string;
	labelClassName?: string;
	containerClassName?: string;
	isSuccess?: boolean;
	successMessage?: string;
	isError?: boolean;
	errorMessage?: string;
	rounded?: boolean;
	gradient?: boolean;
	icon?: string;
	iconClassName?: string;
}

const inputTV = tv({
	slots: {
		container:
			'block transition-all duration-200 relative w-fit border border-solid border-transparent',
		input:
			'unset-all appearance-none block bg-dark-600 border border-solid border-transparent rounded-md h-10 outline-none text-white text-base transition-all duration-200 placeholder:text-dark-300 text-sm',
		componentContainer: 'w-full flex flex-col gap-2',
		labelText: 'text-sm font-medium',
		successMessageText: 'text-sm font-medium text-success-500',
		errorMessageText: 'text-sm font-medium text-error-500',
		iconElement: 'absolute top-1/2 left-2 -translate-y-1/2',
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
		isSuccess,
		successMessage,
		isError,
		errorMessage,
		rounded,
		gradient,
		icon,
		iconClassName = '',
		...rest
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
	} = inputTV({
		gradient,
		isSuccess,
		isError,
		isFocus,
		rounded,
		icon: !!icon,
	});

	return (
		<>
			<label className={`${componentContainer()} ${containerClassName}`}>
				{label && (
					<span className={`${labelText()} ${labelClassName}`}>{label}</span>
				)}
				<div className={container()}>
					{icon && (
						<Icon name={icon} className={`${iconElement()} ${iconClassName}`} />
					)}
					<input
						className={input()}
						{...rest}
						onFocus={() => setIsFocus(true)}
						onBlur={() => setIsFocus(false)}
					/>
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
