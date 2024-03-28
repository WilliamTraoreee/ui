import { Switch as SwitchPrimitive } from '@ark-ui/react';
import { tv } from 'tailwind-variants';
import { Tooltip } from '../../tooltip/tooltip';
import { Icon } from '../../icon/icon';

interface Props {
	label?: string;
	labelClassName?: string;
	information?: string;
}

const switchTV = tv({
	slots: {
		labelText: 'text-sm font-medium',
		container: '',
		switchElement: '',
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
	},
});

export function Switch(props: Props) {
	const { label, labelClassName = '', information } = props;

	const { labelText } = switchTV();

	return (
		<SwitchPrimitive.Root>
			{label && (
				<div className='w-full flex gap-2 items-center'>
					<span className={`${labelText()} ${labelClassName}`}>{label}</span>
					{information && (
						<Tooltip content={information}>
							<span className='flex items-center'>
								<Icon name='i-ri:information-line' className='text-dark-200' />
							</span>
						</Tooltip>
					)}
				</div>
			)}
			<SwitchPrimitive.Control>
				<SwitchPrimitive.Thumb />
			</SwitchPrimitive.Control>
			<SwitchPrimitive.Label>Label</SwitchPrimitive.Label>
		</SwitchPrimitive.Root>
	);
}
