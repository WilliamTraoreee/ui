import { Popover as PopoverPrimitive, Portal } from '@ark-ui/react';
import './popover.style.css';
import { CSSProperties } from 'react';

interface Props {
	trigger: React.ReactNode;
	children: React.ReactNode;
	contentClassName?: string;
}

export function Popover(props: Props) {
	const { trigger, children, contentClassName = '' } = props;

	return (
		<PopoverPrimitive.Root portalled>
			<PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
			<Portal>
				<PopoverPrimitive.Positioner>
					<PopoverPrimitive.Content
						className={`p-3 rounded-lg bg-dark-800 light:bg-light-200 light:text-dark-700 ${contentClassName}`}
					>
						<PopoverPrimitive.Arrow
							className='bg-dark-800 light:bg-light-200 rotate-45 rounded-sm'
							style={
								{
									'--arrow-size': '12px',
								} as CSSProperties
							}
						>
							<PopoverPrimitive.ArrowTip />
						</PopoverPrimitive.Arrow>
						{children}
					</PopoverPrimitive.Content>
				</PopoverPrimitive.Positioner>
			</Portal>
		</PopoverPrimitive.Root>
	);
}
