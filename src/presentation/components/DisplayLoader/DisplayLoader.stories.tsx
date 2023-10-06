import type { Meta, StoryObj } from '@storybook/react'
import { DisplayLoader } from '@/presentation/components'

const meta: Meta<typeof DisplayLoader> = {
  component: DisplayLoader,
  title: 'Feedback/DisplayLoader'
}

export default meta
type Story = StoryObj<typeof DisplayLoader>

export const Default: Story = {}
