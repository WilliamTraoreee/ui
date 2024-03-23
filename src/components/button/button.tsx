import { Link } from '@inertiajs/react';
import { ComponentPropsWithoutRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
	base: 'transition-all duration-200 cursor-pointer focus-visible:outline-1 focus-visible:outline focus-visible:outline-offset-2 border-transparent border-solid inline-flex items-center before:rounded',
	variants: {
		size: {
			xl: 'h-16 px-6 rounded-md font-bold text-lg',
			lg: 'h-13 px-5 rounded-md font-bold text-base',
			base: 'h-10 px-3 rounded font-bold text-sm',
			md: 'h-8 px-3 rounded font-bold text-sm',
			sm: 'h-6 px-2 rounded-sm font-bold text-xs',
		},
		variant: {
			primary:
				'bg-primary-500 hover:bg-primary-600 text-white outline-primary-200',
			secondary:
				'bg-secondary-500 hover:bg-secondary-600 text-white outline-secondary-200',
			success:
				'bg-success-500 hover:bg-success-600 text-dark-700 outline-success-200',
			error: 'bg-error-500 hover:bg-error-600 text-white outline-error-200',
			warning:
				'bg-warning-500 hover:bg-warning-600 text-dark-700 outline-warning-200',
			stroke:
				'bg-dark-500 hover:bg-dark-600 text-white outline-dark-200 !border !border-dark-400',
			transparent:
				'bg-transparent hover:bg-dark-600 text-white outline-dark-200',
			dark: 'bg-dark-600 hover:bg-dark-700 text-white outline-dark-200',
			light: 'bg-light-200 hover:bg-light-400 text-dark-700 outline-light-200',
		},
		gradient: {
			true: 'relative border border-transparent bg-clip-padding before:content-[""] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-[-1] before:bg-gradient-to-b before:m-[-1px]',
		},
		rounded: {
			true: 'rounded-full',
			false: 'rounded',
		},
	},
	compoundVariants: [
		{
			gradient: true,
			rounded: true,
			class: 'before:rounded-full',
		},
		{
			gradient: true,
			variant: 'primary',
			class: 'from-primary-400 to-primary-500',
		},
		{
			gradient: true,
			variant: 'secondary',
			class: 'from-secondary-300 to-secondary-500',
		},
		{
			gradient: true,
			variant: 'success',
			class: 'from-success-200 to-success-500',
		},
		{
			gradient: true,
			variant: 'error',
			class: 'from-error-300 to-error-500',
		},
		{
			gradient: true,
			variant: 'warning',
			class: 'from-warning-200 to-warning-500',
		},
		{
			gradient: true,
			variant: 'stroke',
			class: 'from-dark-400 to-dark-500',
		},
		{
			gradient: true,
			variant: 'dark',
			class: 'from-dark-400 to-dark-500',
		},
		{
			gradient: true,
			variant: 'light',
			class: 'from-white to-light-400',
		},
		{
			gradient: true,
			size: 'xl',
			class: 'before:rounded-md',
		},
		{
			gradient: true,
			size: 'lg',
			class: 'before:rounded-md',
		},
		{
			gradient: true,
			size: 'sm',
			class: 'before:rounded-sm',
		},
		{
			gradient: true,
			rounded: true,
			class: 'before:rounded-full',
		},
		{
			gradient: true,
			rounded: false,
			class: 'before:rounded',
		},
	],
});

type Variant = VariantProps<typeof button>['variant'];

type Size = VariantProps<typeof button>['size'];

interface Props extends ComponentPropsWithoutRef<'button'> {
	children: React.ReactNode;
	size?: Size;
	variant?: Variant;
	link?: string;
	linkOptions?: { external?: boolean; sameWindow?: boolean };
	gradient?: boolean;
	rounded?: boolean;
}

export function Button(props: Props) {
	const {
		children,
		size = 'base',
		variant = 'primary',
		link,
		linkOptions,
		gradient = false,
		rounded = false,
		...rest
	} = props;

	const buttonClasses = `${button({ size, variant, gradient, rounded })} ${rest.className}`;

	if (link && !linkOptions?.external) {
		return (
			<Link href={link} className={buttonClasses}>
				{children}
			</Link>
		);
	}

	if (link && linkOptions?.external) {
		return (
			<a
				href={link}
				target={linkOptions.sameWindow ? '_self' : '_blank'}
				rel='noopener noreferrer'
				className={buttonClasses}
			>
				{children}
			</a>
		);
	}

	return (
		<button {...rest} className={buttonClasses}>
			{children}
		</button>
	);
}
