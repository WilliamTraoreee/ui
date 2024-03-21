import { ComponentPropsWithoutRef, useState } from 'react';

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
}

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
		...rest
	} = props;

	const [isFocus, setIsFocus] = useState(false);

	const gradientClasses = {
		normal: `relative border border-transparent bg-clip-padding before:content-[""] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-1] before:bg-gradient-to-b from-dark-400/30 to-transparent before:m-[-1px] before:rounded before:transition-all before:duration-200 before:ease-in-out ${rounded ? 'before:rounded-full' : ''}`,
		focus: `relative border border-transparent bg-clip-padding before:content-[""] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-1] before:bg-gradient-to-b from-primary-400 to-transparent before:m-[-1px] before:rounded before:transition-all before:duration-200 before:ease-in-out ${rounded ? 'before:rounded-full' : ''}`,
		success: `relative border border-transparent bg-clip-padding before:content-[""] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-1] before:bg-gradient-to-b !from-success-400 to-transparent before:m-[-1px] before:rounded before:transition-all before:duration-200 before:ease-in-out ${rounded ? 'before:rounded-full' : ''}`,
		error: `relative border border-transparent bg-clip-padding before:content-[""] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-1] before:bg-gradient-to-b !from-error-400 to-transparent before:m-[-1px] before:rounded before:transition-all before:duration-200 before:ease-in-out ${rounded ? 'before:rounded-full' : ''}`,
	};

	return (
		<>
			<label className={`w-full flex flex-col gap-2 ${containerClassName}`}>
				{label && (
					<span className={`text-sm font-medium ${labelClassName}`}>
						{label}
					</span>
				)}
				<div
					className={`block transition-all duration-200 relative w-fit ${gradient && !isFocus ? gradientClasses.normal : ''} ${isFocus && gradient ? gradientClasses.focus : ''} ${isSuccess ? gradientClasses.success : ''} ${isError && !isFocus && gradient ? gradientClasses.error : ''} ${rounded ? 'rounded-full' : 'rounded'}`}
				>
					<input
						className={`block bg-dark-600 border border-solid border-transparent rounded h-10 outline-none text-white px-3 text-base transition-all duration-200 placeholder:text-dark-300 text-sm ${isSuccess && !gradient ? '!border-success-500' : ''} ${isError && !gradient ? '!border-error-500' : ''} ${rounded ? '!rounded-full' : ''} ${rest.className}`}
						focus={`${gradient ? gradientClasses.focus : 'border-primary-500'}`}
						onFocus={() => setIsFocus(true)}
						onBlur={() => setIsFocus(false)}
						{...rest}
					/>
				</div>
			</label>
			{successMessage && (
				<span className='text-sm font-medium text-success-500'>
					{successMessage}
				</span>
			)}
			{errorMessage && (
				<span className='text-sm font-medium text-error-500'>
					{errorMessage}
				</span>
			)}
		</>
	);
}
