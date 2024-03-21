interface Props {
	width?: number;
	initial?: string;
	src?: string;
	variant?: 'light' | 'dark';
	alt?: string;
	className?: string;
}

export function Avatar(props: Props) {
	const {
		width = 40,
		initial,
		src,
		variant = 'dark',
		alt,
		className = '',
	} = props;

	if (!src) {
		return (
			<div
				style={{ width }}
				className={`rounded aspect-square flex items-center justify-center text-sm font-medium ${variant === 'dark' ? 'bg-dark-600 text-dark-200' : 'bg-light-200 text-light-700'} ${className}`}
			>
				{initial?.slice(0, 2)}
			</div>
		);
	}

	return (
		<img
			src={src}
			alt={alt}
			style={{ width }}
			className={`aspect-square rounded ${className}`}
		/>
	);
}
