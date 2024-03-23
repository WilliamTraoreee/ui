import { tv } from 'tailwind-variants';

interface Props {
	width?: number;
	initial?: string;
	src?: string;
	variant?: 'light' | 'dark';
	alt?: string;
	className?: string;
}

const avatar = tv({
	slots: {
		withoutSrc:
			'rounded aspect-square flex items-center justify-center text-sm font-medium',
		withSrc: 'aspect-square rounded',
	},
	variants: {
		variant: {
			dark: {
				withoutSrc: 'bg-dark-600 text-dark-200',
			},
			light: {
				withoutSrc: 'bg-light-200 text-light-700',
			},
		},
	},
});

export function Avatar(props: Props) {
	const {
		width = 40,
		initial,
		src,
		variant = 'dark',
		alt,
		className = '',
	} = props;

	const { withoutSrc, withSrc } = avatar({ variant });

	if (!src) {
		return (
			<div style={{ width }} className={`${withoutSrc()} ${className}`}>
				{initial?.slice(0, 2)}
			</div>
		);
	}

	return (
		<img
			src={src}
			alt={alt}
			style={{ width }}
			className={`${withSrc()} ${className}`}
		/>
	);
}
