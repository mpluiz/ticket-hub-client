import type { Meta, StoryObj } from '@storybook/react'
import { TicketBuyActions } from '@/presentation/components'

const meta: Meta<typeof TicketBuyActions> = {
  component: TicketBuyActions,
  title: 'App/TicketBuyActions',
  argTypes: { onBuyTicket: { action: 'clicked' } }
}

export default meta
type Story = StoryObj<typeof TicketBuyActions>

export const Default: Story = {
  args: {
    value: 1391.28
  }
}
