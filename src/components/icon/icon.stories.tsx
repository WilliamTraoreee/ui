import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';

const meta = {
	title: 'Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		name: 'i-ri:user-line',
		className: 'text-5xl',
	},
};
