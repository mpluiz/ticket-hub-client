import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from '@/presentation/components'

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Typography/Heading'
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: { children: 'valid-text' }
}
