import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider } from './toast';

const meta = {
	title: 'Toast',
	component: Toast,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	decorators: [
		(Story) => (
			<>
				<Story />
				<ToastProvider position='top-right' />
			</>
		),
	],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		type: 'default',
		title: 'Title',
		message: 'Message',
	},
};
