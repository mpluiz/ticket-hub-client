import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from '@/presentation/components'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: 'Navigation/NavBar',
  decorators: [withRouter]
}

export default meta
type Story = StoryObj<typeof NavBar>

export const Default: Story = {}
