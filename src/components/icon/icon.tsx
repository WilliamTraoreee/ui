interface Props {
	name: string;
	className?: string;
}

export function Icon(props: Props) {
	const { name, className = '' } = props;

	return (
		<i className={`i-ri-${name} text-white inline-block ${className}`}></i>
	);
}
