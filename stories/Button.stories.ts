import { Button } from '@/components/ui/button'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Default',
	},
}
export const PrimaryDisabled: Story = {
	args: {
		children: 'Default',
		disabled: true,
	},
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Secondary',
	},
}
export const SecondaryDisabled: Story = {
	args: {
		children: 'secondary',
		disabled: true,
	},
}
