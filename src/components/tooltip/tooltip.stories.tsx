import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';

const meta = {
	title: 'Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		children: <p className='text-white light:text-black'>Hover me</p>,
		content: 'Tooltip content',
	},
};
