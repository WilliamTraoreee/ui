import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
	title: 'Forms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		label: 'Input label',
		placeholder: 'Input placeholder',
	},
};
