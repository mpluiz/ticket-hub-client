import type { Meta, StoryObj } from '@storybook/react'
import { CartItem } from '@/presentation/components'

const meta: Meta<typeof CartItem> = {
  component: CartItem,
  title: 'App/CartItem'
}

export default meta
type Story = StoryObj<typeof CartItem>

export const Default: Story = {
  args: {
    name: 'Ingresso Universal 2 park to 2 dias flexivel - 15/09/2022',
    imageUrl: 'https://i.postimg.cc/NGydj1QZ/image-1.png',
    quantity: 1,
    value: 1468.60
  }
}
