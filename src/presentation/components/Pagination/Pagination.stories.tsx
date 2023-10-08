import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '@/presentation/components'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Navigation/Pagination',
  argTypes: { onChangePage: { action: 'clicked' } }
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    numberOfPages: 3,
    numberOfItems: 31,
    page: 1
  }
}
