import type { Meta, StoryObj } from '@storybook/react'
import { Review } from '@/presentation/components'

const meta: Meta<typeof Review> = {
  component: Review,
  title: 'App/Review'
}

export default meta
type Story = StoryObj<typeof Review>

export const Default: Story = {
  args: { value: 6.3, total: 423 }
}
