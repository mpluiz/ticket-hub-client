import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from '@/presentation/components'

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'App/Logo'
}

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {}
