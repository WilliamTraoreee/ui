import { Switch as SwitchPrimitive } from '@ark-ui/react';
import { tv } from 'tailwind-variants';
import { Tooltip } from '../../tooltip/tooltip';
import { Icon } from '../../icon/icon';

interface Props {
	label?: string;
	labelClassName?: string;
	information?: string;
	size?: 'md' | 'base' | 'lg';
}

const switchTV = tv({
	slots: {
		labelText: 'text-sm font-medium',
		container: 'flex items-center gap-2',
		control:
			'bg-dark-600 flex rounded-full items-center data-[state="checked"]:bg-primary-500 transition-all duration-200 shrink-0',
		thumb: 'bg-white rounded-full transition-all duration-200 relative',
	},
	variants: {
		size: {
			md: {
				control: 'w-10 h-6 px-1.5',
				thumb: 'w-3 h-3 data-[state="checked"]:translate-x-4',
				labelText: 'text-sm',
			},
			base: {
				control: 'w-14 h-8 px-2',
				thumb: 'w-4.5 h-4.5 data-[state="checked"]:translate-x-6',
				labelText: 'text-base',
			},
			lg: {
				control: 'w-18 h-10 px-2.5',
				thumb: 'w-6 h-6 data-[state="checked"]:translate-x-7',
				labelText: 'text-lg',
			},
		},
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
	const { label, labelClassName = '', information, size = 'base' } = props;

	const { labelText, container, control, thumb } = switchTV({
		size,
	});

	return (
		<SwitchPrimitive.Root className={container()}>
			<SwitchPrimitive.Control className={control()}>
				<SwitchPrimitive.Thumb className={thumb()} />
			</SwitchPrimitive.Control>
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
		</SwitchPrimitive.Root>
	);
}
