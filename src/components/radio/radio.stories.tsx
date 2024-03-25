import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';

const meta = {
	title: 'Forms/Radio',
	component: Radio,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAvatar: Story = {
	args: {
		items: [
			{ label: 'React', value: 'react' },
			{ label: 'Vue', value: 'vue' },
			{ label: 'Angular', value: 'angular', disabled: true },
		],
	},
};
