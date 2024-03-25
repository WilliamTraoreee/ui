import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './dialog';
import { Button } from '../button/button';

const meta = {
	title: 'Dialog',
	component: Dialog,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		trigger: <Button>Open dialog</Button>,
		title: 'Modal title',
		children: 'Modal content',
	},
};
