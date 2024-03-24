import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

const meta = {
	title: 'Forms/Slider',
	component: Slider,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	decorators: [
		(Story) => (
			<div className='w-96'>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
	args: {
		min: 0,
		max: 1234,
		displayValue: true,
		displayInput: true,
		label: 'Slider',
		valueSuffix: 'px',
		inputProps: {
			suffix: 'px',
		},
	},
};
