import type { Meta, StoryObj } from '@storybook/react'
import { TicketTitleAction } from '@/presentation/components'

const meta: Meta<typeof TicketTitleAction> = {
  component: TicketTitleAction,
  title: 'App/TicketTitleAction',
  argTypes: { onClick: { action: 'clicked' } }
}

export default meta
type Story = StoryObj<typeof TicketTitleAction>

export const Default: Story = {
  args: {
    title: 'Lorem ipsum dolor amet consectetur',
    address: { city: 'GetYourGuide Tours & Tickets GmbH', state: 'São Paulo' }
  }
}
