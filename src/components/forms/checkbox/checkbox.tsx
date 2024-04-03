import { Checkbox as CheckboxPrimitive } from '@ark-ui/react';
import { useState } from 'react';
import { tv } from 'tailwind-variants';
import { Icon } from '../../icon/icon';
import { Tooltip } from '../../tooltip/tooltip';

interface Props {
	checked?: boolean;
	label?: string;
	labelClassName?: string;
	information?: string;
	onCheckedChange?: (checked: boolean) => void;
	name?: string;
	value?: string;
	disabled?: boolean;
	successMessage?: string;
	errorMessage?: string;
}

const checkboxTV = tv({
	slots: {
		labelText: 'text-sm font-medium light:text-dark-400',
		box: 'w-4 h-4 rounded-sm mr-2 flex items-center justify-center bg-dark-800 light:bg-light-400 cursor-pointer transition-colors duration-200 ease-in-out shrink-0',
		successMessageText: 'text-sm font-medium text-success-500',
		errorMessageText: 'text-sm font-medium text-error-500',
	},
	variants: {
		checked: {
			true: {
				box: 'bg-primary-500 light:bg-primary-500',
			},
		},
		disabled: {
			true: {
				box: 'bg-dark-400 cursor-not-allowed',
			},
		},
	},
});

export function Checkbox(props: Props) {
	const {
		checked,
		label,
		labelClassName,
		information,
		onCheckedChange,
		name,
		value,
		disabled,
		successMessage,
		errorMessage,
	} = props;

	const [isChecked, setIsChecked] = useState<boolean>(checked || false);

	const { box, labelText, successMessageText, errorMessageText } = checkboxTV({
		checked: isChecked,
		disabled,
	});

	return (
		<div>
			<CheckboxPrimitive.Root
				name={name}
				value={value}
				disabled={disabled}
				onCheckedChange={(details) => {
					setIsChecked(details.checked as boolean);
					onCheckedChange?.(details.checked as boolean);
				}}
				className='flex items-center'
			>
				<CheckboxPrimitive.Control className={box()}>
					{isChecked && <Icon name='i-ri-check-line' />}
				</CheckboxPrimitive.Control>
				{label && (
					<div className='w-full flex gap-2 items-center'>
						<CheckboxPrimitive.Label
							className={`${labelText()} ${labelClassName}`}
						>
							{label}
						</CheckboxPrimitive.Label>
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
			</CheckboxPrimitive.Root>
			{successMessage && (
				<span className={successMessageText()}>{successMessage}</span>
			)}
			{errorMessage && (
				<span className={errorMessageText()}>{errorMessage}</span>
			)}
		</div>
	);
}
