import toast, { Toaster } from 'react-hot-toast';
import { Button } from '../button/button';

interface ToastProps {
	type: 'default' | 'success' | 'warning' | 'error';
	title: string;
	message: string;
	duration?: number;
}

export function Toast(props: ToastProps) {
	const { type, title, message, duration } = props;

	return (
		<>
			<Button onClick={() => toastr(type, title, message, duration)}>
				Display toast
			</Button>
		</>
	);
}

export function toastr(
	type: 'default' | 'success' | 'warning' | 'error',
	title: string,
	message: string,
	duration?: number
) {
	toast(<ToastContent type={type} title={title} message={message} />, {
		id: crypto.randomUUID(),
		duration: duration || 5000,
		position: 'top-right',
		className:
			'!p-0 !bg-transparent !border-0 !rounded-0 !shadow-none !text-white',
	});
}

interface ToastContentProps {
	type: 'default' | 'success' | 'warning' | 'error';
	title: string;
	message: string;
}

function ToastContent(props: ToastContentProps) {
	const { type, title, message } = props;

	return (
		<div className='bg-dark-600 rounded py-4 pl-5 pr-4 overflow-hidden relative min-w-[300px] flex gap-4 shadow-lg'>
			<div
				className={`w-1 h-full absolute top-0 left-0 ${
					type === 'default'
						? 'bg-primary-500'
						: type === 'success'
							? 'bg-success-500'
							: type === 'warning'
								? 'bg-warning-500'
								: 'bg-error-500'
				}`}
			></div>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-col gap-0.5'>
					<span className='font-bold'>{title}</span>
					<span className='text-sm'>{message}</span>
				</div>
			</div>
		</div>
	);
}

interface ToastProviderProps {
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function ToastProvider(props: ToastProviderProps) {
	const { position = 'top-right' } = props;

	return <Toaster position={position} />;
}
