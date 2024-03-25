import { Dialog as DialogPrimitive, Portal } from '@ark-ui/react';
import { tv } from 'tailwind-variants';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';
import { motion } from 'framer-motion';

interface Props {
	trigger: React.ReactNode;
	contentClassName?: string;
	title: string;
	gradient?: boolean;
	children: React.ReactNode;
	footer?: React.ReactNode;
	footerCloseButton?: boolean;
	footerCloseButtonLabel?: string;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

const dialogTV = tv({
	slots: {
		backdrop: 'fixed inset-0 bg-black/10 bg-opacity-50 z-10',
		content:
			'fixed z-100 !bg-dark-800 rounded-lg p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-w-lg shadow-lg',
		titleElement: 'text-white text-2xl font-medium m-0',
		motionElement: 'fixed w-full',
	},
	variants: {
		gradient: {
			true: {
				content:
					'border border-transparent bg-clip-padding before:content-[""] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-1] before:bg-gradient-to-b before:m-[-1px] before:rounded-md before:transition-all before:duration-200 before:ease-in-out before:to-transparent !border-none before:from-dark-400/30 z-20',
			},
		},
	},
});

const dialogAnimation = {
	initial: {
		y: 20,
		x: 0,
		left: 0,
	},
	in: {
		y: 0,
		x: 0,
		left: 0,
		transition: {
			duration: 0.1,
			ease: 'easeInOut',
			type: 'spring',
			stiffness: 100,
			damping: 10,
		},
	},
	out: {
		y: 200,
		opacity: 0,
		transition: {
			duration: 0.3,
			stiffness: 100,
			ease: 'easeInOut',
		},
	},
};

export function Dialog(props: Props) {
	const {
		trigger,
		contentClassName = '',
		title,
		gradient,
		children,
		footer,
		footerCloseButton = false,
		footerCloseButtonLabel = 'Close',
		open,
		onOpenChange,
	} = props;

	const { backdrop, content, titleElement, motionElement } = dialogTV({
		gradient,
	});

	return (
		<DialogPrimitive.Root
			trapFocus={false}
			lazyMount
			unmountOnExit
			open={open}
			onOpenChange={(details) => onOpenChange?.(details.open)}
		>
			<DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
			<Portal>
				<DialogPrimitive.Backdrop className={backdrop()} />

				<DialogPrimitive.Positioner>
					<motion.div
						variants={dialogAnimation}
						initial='initial'
						animate='in'
						exit='out'
						className={motionElement()}
					>
						<DialogPrimitive.Content
							className={`${content()} ${contentClassName}`}
						>
							<div className='flex justify-between items-center mb-3'>
								<DialogPrimitive.Title className={titleElement()}>
									{title}
								</DialogPrimitive.Title>
								<DialogPrimitive.CloseTrigger asChild>
									<Button variant='transparent'>
										<Icon
											name='i-ri:close-line'
											className='text-dark-300 text-xl'
										/>
									</Button>
								</DialogPrimitive.CloseTrigger>
							</div>
							<DialogPrimitive.Description>
								{children}
							</DialogPrimitive.Description>
							<div className='w-full flex justify-end items-center gap-2'>
								{footerCloseButton && (
									<DialogPrimitive.CloseTrigger asChild>
										<Button variant='dark'>{footerCloseButtonLabel}</Button>
									</DialogPrimitive.CloseTrigger>
								)}
								{footer}
							</div>
						</DialogPrimitive.Content>
					</motion.div>
				</DialogPrimitive.Positioner>
			</Portal>
		</DialogPrimitive.Root>
	);
}
