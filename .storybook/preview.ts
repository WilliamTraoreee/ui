import type { Preview } from '@storybook/react';
import 'virtual:uno.css';
import '../src/global.css';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#252525',
				},
				{
					name: 'light',
					value: '#E9E9E9',
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
