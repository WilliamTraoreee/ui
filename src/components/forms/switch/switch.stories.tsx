import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

const meta = {
	title: 'Forms/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {},
};
