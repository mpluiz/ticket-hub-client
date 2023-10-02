import type { Meta, StoryObj } from '@storybook/react'
import { ButtonCart } from '@/presentation/components'

const meta: Meta<typeof ButtonCart> = {
  component: ButtonCart,
  title: 'Form/ButtonCart',
  argTypes: { onClick: { action: 'clicked' } }
}

export default meta
type Story = StoryObj<typeof ButtonCart>

export const Default: Story = {}
