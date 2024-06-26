import { Slider as SliderPrimitive } from '@ark-ui/react';
import { useState } from 'react';
import { Input, Props as InputProps } from '../input/input';
import { Tooltip } from '../../tooltip/tooltip';
import { Icon } from '../../icon/icon';

interface Props {
	label?: string;
	labelClassName?: string;
	information?: string;
	containerClassName?: string;
	defaultValue?: number;
	min: number;
	max: number;
	onValueChange?: (value: number) => void;
	displayValue?: boolean;
	valueSuffix?: string;
	valuePrefix?: string;
	displayInput?: boolean;
	inputProps?: InputProps;
	successMessage?: string;
	errorMessage?: string;
}

export function Slider(props: Props) {
	const {
		label,
		labelClassName = '',
		information,
		defaultValue = 0,
		containerClassName = '',
		onValueChange,
		displayValue,
		valueSuffix,
		valuePrefix,
		min,
		max,
		displayInput,
		inputProps,
		successMessage,
		errorMessage,
	} = props;

	const [currentValue, setCurrentValue] = useState(defaultValue);

	const handleValueChange = (value: number) => {
		if (value < min) {
			value = min;
		} else if (value > max) {
			value = max;
		}
		setCurrentValue(value);
		onValueChange && onValueChange(value);
	};

	return (
		<div className={containerClassName}>
			{label && (
				<div className='w-full flex gap-2 items-center'>
					<span className={`text-sm font-medium ${labelClassName}`}>
						{label}
					</span>
					{information && (
						<Tooltip content={information}>
							<span className='flex items-center'>
								<Icon name='i-ri:information-line' className='text-dark-200' />
							</span>
						</Tooltip>
					)}
				</div>
			)}
			<div className='w-full flex items-center gap-5'>
				<SliderPrimitive.Root
					min={min}
					max={max}
					value={[currentValue]}
					onValueChange={(details) => handleValueChange(details.value[0])}
					className='relative flex-1'
				>
					<SliderPrimitive.Control className='relative'>
						<SliderPrimitive.Track className='w-full h-2 bg-dark-800 light:bg-light-200 rounded-full'>
							<SliderPrimitive.Range className='bg-primary-500 h-2 rounded-full' />
						</SliderPrimitive.Track>
						<SliderPrimitive.Thumb
							index={0}
							className='w-4 h-4 bg-light-100 absolute -top-1 rounded-full'
							focus='outline-2 outline outline-offset-1 outline-primary-200'
						/>
					</SliderPrimitive.Control>
					{displayValue && (
						<div
							className='absolute -bottom-12 bg-dark-700 inline-flex items-center h-8 justify-center rounded text-sm font-bold px-3 text-center before:content-[""]'
							before='content-[""] w-3 h-3 bg-dark-700 rounded rotate-45 -top-1 left-1/2 -translate-x-1/2 absolute'
							style={{
								transform: `var(--slider-thumb-transform)`,
								insetInlineStart: `var(--slider-thumb-offset-0)`,
							}}
						>
							{valuePrefix}
							<SliderPrimitive.ValueText />
							{valueSuffix}
						</div>
					)}
				</SliderPrimitive.Root>
				{displayInput && (
					<Input
						{...inputProps}
						containerClassName='!w-20'
						type='number'
						value={currentValue}
						onChange={(e) => handleValueChange(e.target.valueAsNumber)}
						min={min}
						max={max}
					/>
				)}
			</div>
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
		</div>
	);
}
