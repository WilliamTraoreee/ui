import { Slider as SliderPrimitive } from '@ark-ui/react';
import { useState } from 'react';
import { Input, Props as InputProps } from '../input/input';

interface Props {
	label?: string;
	labelClassName?: string;
	defaultValue?: number;
	min: number;
	max: number;
	onValueChange?: (value: number) => void;
	displayValue?: boolean;
	displayInput?: boolean;
	inputProps?: InputProps;
}

export function Slider(props: Props) {
	const {
		label,
		labelClassName = '',
		defaultValue = 0,
		onValueChange,
		displayValue,
		min,
		max,
		displayInput,
		inputProps,
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
		<>
			{label && (
				<span className={`text-sm font-medium ${labelClassName}`}>{label}</span>
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
						<SliderPrimitive.Track className='w-full h-2 bg-dark-800 rounded-full'>
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
							<SliderPrimitive.ValueText />
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
		</>
	);
}
