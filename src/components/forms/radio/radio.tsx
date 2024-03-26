import { RadioGroup } from '@ark-ui/react';
import { tv } from 'tailwind-variants';
import { Icon } from '../../icon/icon';
import { Tooltip } from '../../tooltip/tooltip';

type RadioItem = { label: string; value: string; disabled?: boolean };

interface Props {
	items: RadioItem[];
	label?: string;
	labelClassName?: string;
	information?: string;
	containerClassName?: string;
	successMessage?: string;
	errorMessage?: string;
	defaultValue?: string;
	onValueChange?: (value: string) => void;
}

const radioTV = tv({
	slots: {
		labelText: 'text-sm font-medium',
		box: 'w-4 h-4 rounded-sm mr-2 flex items-center justify-center bg-dark-800 cursor-pointer transition-colors duration-200 ease-in-out shrink-0 rounded-full data-[state="checked"]:bg-primary-500 data-[disabled]:bg-dark-400',
		successMessageText: 'text-sm font-medium text-success-500',
		errorMessageText: 'text-sm font-medium text-error-500',
		itemElement: 'flex items-center gap-1 mb-1 last:mb-0',
		indicator: 'w-2 h-2 rounded-full bg-white mt-1.5 ml-1',
	},
	variants: {
		checked: {
			true: {
				box: 'bg-primary-500',
			},
		},
		disabled: {
			true: {
				box: 'bg-dark-400 cursor-not-allowed',
			},
		},
	},
});

export function Radio(props: Props) {
	const {
		items,
		label,
		labelClassName,
		information,
		containerClassName,
		successMessage,
		errorMessage,
		defaultValue,
		onValueChange,
	} = props;

	const {
		box,
		labelText,
		itemElement,
		indicator,
		successMessageText,
		errorMessageText,
	} = radioTV();

	return (
		<div className={containerClassName}>
			<RadioGroup.Root
				defaultValue={defaultValue}
				onValueChange={(details) => onValueChange?.(details.value)}
			>
				{label && (
					<div className='w-full flex gap-2 items-center'>
						<RadioGroup.Label className={`${labelText()} ${labelClassName}`}>
							{label}
						</RadioGroup.Label>
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
				<RadioGroup.Indicator className={indicator()} />
				{items.map((item) => (
					<RadioGroup.Item
						key={item.value}
						value={item.value}
						disabled={item.disabled}
						className={itemElement()}
					>
						<RadioGroup.ItemControl className={box()} />
						<RadioGroup.ItemText className={labelText()}>
							{item.label}
						</RadioGroup.ItemText>
					</RadioGroup.Item>
				))}
			</RadioGroup.Root>
			{successMessage && (
				<span className={successMessageText()}>{successMessage}</span>
			)}
			{errorMessage && (
				<span className={errorMessageText()}>{errorMessage}</span>
			)}
		</div>
	);
}
