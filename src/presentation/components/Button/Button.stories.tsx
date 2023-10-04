import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/presentation/components'
import { IconArrowUpRight } from '@/presentation/components/icons'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Form/Button'
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: { children: 'Primary' }
}

export const Loading: Story = {
  args: { children: 'Primary', loading: true }
}

export const Icon: Story = {
  args: { children: 'Primary', icon: <IconArrowUpRight /> }
}
