import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta = {
	title: 'Forms/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		multiple: false,
		containerClassName: '!w-80',
		options: [
			{ value: '1', label: 'Option 1' },
			{ value: '2', label: 'Option 2' },
			{ value: '3', label: 'Option 3' },
		],
		label: 'Your firstname',
		placeholder: 'Select an option',
	},
};
