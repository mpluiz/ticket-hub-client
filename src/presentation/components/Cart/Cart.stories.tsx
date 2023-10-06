import type { Meta, StoryObj } from '@storybook/react'
import { Cart } from '@/presentation/components'

const meta: Meta<typeof Cart> = {
  component: Cart,
  title: 'App/Cart'
}

export default meta
type Story = StoryObj<typeof Cart>

export const Default: Story = {
  args: { open: true }
}
