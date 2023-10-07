import type { Meta, StoryObj } from '@storybook/react'
import { TicketLocalization } from '@/presentation/components'

const meta: Meta<typeof TicketLocalization> = {
  component: TicketLocalization,
  title: 'App/TicketLocalization'
}

export default meta
type Story = StoryObj<typeof TicketLocalization>

export const Default: Story = {}
