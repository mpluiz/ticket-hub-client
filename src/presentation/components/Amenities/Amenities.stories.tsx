import type { Meta, StoryObj } from '@storybook/react'
import { Amenities } from '@/presentation/components'

const meta: Meta<typeof Amenities> = {
  component: Amenities,
  title: 'Form/Amenities'
}

export default meta
type Story = StoryObj<typeof Amenities>

export const Default: Story = {
  args: {
    amenities: [
      'Passagem Aérea',
      'Wi-fi',
      'Café de manhã',
      'Quarto'
    ]
  }
}
