import type { Meta, StoryObj } from '@storybook/react'
import { TicketGallery } from '@/presentation/components'

const meta: Meta<typeof TicketGallery> = {
  component: TicketGallery,
  title: 'App/TicketGallery'
}

export default meta
type Story = StoryObj<typeof TicketGallery>

export const Default: Story = {
  args: {
    background: 'https://i.postimg.cc/pLXxKFBb/background.png'
  }
}
