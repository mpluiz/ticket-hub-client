import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from '@/presentation/components'

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: 'Navigation/NavBar'
}

export default meta
type Story = StoryObj<typeof NavBar>

export const Default: Story = {}
