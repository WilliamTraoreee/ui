import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		children: 'Button',
		size: 'base',
		variant: 'primary',
	},
};
