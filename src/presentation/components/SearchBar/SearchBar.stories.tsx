import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from '@/presentation/components'

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: 'App/SearchBar'
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {
    onSubmit: (event) => ((event.preventDefault()))
  }
}
