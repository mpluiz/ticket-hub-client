import type { Meta, StoryObj } from '@storybook/react'
import { Filter } from '@/presentation/components'

const meta: Meta<typeof Filter> = {
  component: Filter,
  title: 'Form/Filter'
}

export default meta
type Story = StoryObj<typeof Filter>

export const Default: Story = {}
