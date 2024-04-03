import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import { Popover } from './popover';

const meta = {
	title: 'Popover',
	component: Popover,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		trigger: <Button>Open popover</Button>,
		children: <p className='m-0'>Popover Content</p>,
	},
};
