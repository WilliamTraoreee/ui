import { Tooltip as TooltipPrimitive } from '@ark-ui/react';
import { CSSProperties } from 'react';
import { motion } from 'framer-motion';

interface Props {
	children: React.ReactNode;
	content: string;
}

export function Tooltip(props: Props) {
	const { children, content } = props;

	return (
		<TooltipPrimitive.Root
			lazyMount
			unmountOnExit
			openDelay={0}
			positioning={{ placement: 'top' }}
		>
			<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Positioner className='z-20'>
				<motion.div
					initial={{
						y: 5,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
				>
					<TooltipPrimitive.Content className='text-sm bg-dark-800 light:bg-light-300 rounded px-2 py-1 light:text-dark-700 font-medium z-20'>
						<TooltipPrimitive.Arrow
							className='bg-dark-800 light:bg-light-300 rotate-45 rounded-sm'
							style={
								{
									'--arrow-size': '12px',
								} as CSSProperties
							}
						>
							<TooltipPrimitive.ArrowTip />
						</TooltipPrimitive.Arrow>
						{content}
					</TooltipPrimitive.Content>
				</motion.div>
			</TooltipPrimitive.Positioner>
		</TooltipPrimitive.Root>
	);
}
