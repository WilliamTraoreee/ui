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
}

const checkboxTV = tv({
	slots: {
		labelText: 'text-sm font-medium',
		box: 'w-4 h-4 rounded-sm mr-2 flex items-center justify-center bg-dark-800 cursor-pointer transition-colors duration-200 ease-in-out shrink-0',
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
	} = props;

	const [isChecked, setIsChecked] = useState<boolean>(checked || false);

	const { box, labelText } = checkboxTV({
		checked: isChecked,
		disabled,
	});

	return (
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
								<Icon name='i-ri:information-line' className='text-dark-200' />
							</span>
						</Tooltip>
					)}
				</div>
			)}
		</CheckboxPrimitive.Root>
	);
}
