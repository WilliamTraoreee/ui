import type { Meta, StoryObj } from '@storybook/react';
import { Clipboard } from './clipboard';

const meta = {
	title: 'Forms/Clipboard',
	component: Clipboard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Clipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		label: 'Copy this value',
	},
};
