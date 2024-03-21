import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

const meta = {
	title: 'Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAvatar: Story = {
	args: {
		width: 40,
		src: 'https://avatars.githubusercontent.com/u/3055951',
	},
};

export const WithoutAvatar: Story = {
	args: {
		width: 40,
		initial: 'WT',
		variant: 'dark',
	},
};
