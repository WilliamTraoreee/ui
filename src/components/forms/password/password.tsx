import { useState } from 'react';
import { Icon } from '../../icon/icon';
import { Input, type Props as InputProps } from '../input/input';
import { tv } from 'tailwind-variants';

const password = tv({
	slots: {
		input: '',
		iconPassword:
			'absolute right-1 top-1 p-2 bg-transparent border-none flex items-center justify-center cursor-pointer text-base text-dark-200 rounded',
	},
	variants: {
		icon: {
			true: {
				input: 'pl-7 !pr-9',
			},
			false: {
				input: 'pl-3 !pr-9',
			},
		},
	},
});

interface Props extends InputProps {}

export function Password(props: Props) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const { input, iconPassword } = password({ icon: !!props.icon });

	return (
		<>
			<Input
				{...props}
				type={isPasswordVisible ? 'text' : 'password'}
				className={input()}
			>
				<button
					type='button'
					onClick={() => setIsPasswordVisible((prev) => !prev)}
					className={iconPassword()}
				>
					<Icon
						name={isPasswordVisible ? 'i-ri:eye-close-line' : 'i-ri:eye-line'}
					/>
				</button>
			</Input>
		</>
	);
}
