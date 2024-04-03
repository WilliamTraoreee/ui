import { useState } from 'react';
import { Icon } from '../../icon/icon';
import { Input, type Props as InputProps } from '../input/input';
import { tv } from 'tailwind-variants';

const clipboard = tv({
	slots: {
		input: '!pr-11',
		iconClipboard:
			'absolute right-1 top-1 p-2 bg-transparent border-none flex items-center justify-center cursor-pointer text-base text-dark-200 rounded w-8 h-8 bg-dark-700 light:bg-light-500 light:text-light-700',
	},
	variants: {
		icon: {
			true: {
				input: 'pl-7',
			},
			false: {
				input: 'pl-3',
			},
		},
	},
});

interface Props extends InputProps {
	onValueCopied?: (value: string) => void;
}

export function Clipboard(props: Props) {
	const [isCopied, setIsCopied] = useState(false);
	const [valueToCopy, setValueToCopy] = useState('');

	const { input, iconClipboard } = clipboard({ icon: !!props.icon });

	const handleCopy = () => {
		navigator.clipboard.writeText(valueToCopy);
		props.onValueCopied && props.onValueCopied(valueToCopy);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<>
			<Input
				{...props}
				onChange={(e) => {
					setValueToCopy(e.target.value);
					props.onChange && props.onChange(e);
				}}
				className={input()}
			>
				<button type='button' onClick={handleCopy} className={iconClipboard()}>
					<Icon name={isCopied ? 'i-ri:check-line' : 'i-ri:file-copy-line'} />
				</button>
			</Input>
		</>
	);
}
