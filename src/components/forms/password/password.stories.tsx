import type { Meta, StoryObj } from '@storybook/react';
import { Password } from './password';

const meta = {
	title: 'Forms/Password',
	component: Password,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		label: 'Input label',
		placeholder: 'Input placeholder',
		icon: 'i-ri:user-3-line',
	},
};
