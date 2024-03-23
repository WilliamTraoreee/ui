interface Props {
	name: string;
	className?: string;
}

export function Icon(props: Props) {
	const { name, className = '' } = props;

	return <i className={`${name} inline-block ${className}`}></i>;
}
