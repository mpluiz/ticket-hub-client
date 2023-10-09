import type { Meta, StoryObj } from '@storybook/react'
import { Cart } from '@/presentation/components'

const meta: Meta<typeof Cart> = {
  component: Cart,
  title: 'App/Cart',
  argTypes: { setClose: { action: 'clicked' }, onCartItemRemove: { action: 'clicked' } }
}

export default meta
type Story = StoryObj<typeof Cart>

export const Default: Story = {
  args: {
    cart: {
      id: '49f176b0-abee-4e2a-863a-a8f110ae903e',
      subTotal: 8347.68,
      total: 8347.68,
      createdAt: new Date(),
      cartItems: [
        {
          id: '0a27b91e-6539-4d3b-aa2b-57e6e7dc7c4b',
          cartId: '49f176b0-abee-4e2a-863a-a8f110ae903e',
          ticketId: 'ffdebed7-7028-4526-8162-acad8f7653ef',
          subTotal: 1391.28,
          quantity: 1,
          createdAt: new Date(),
          ticket: {
            id: 'ffdebed7-7028-4526-8162-acad8f7653ef',
            name: 'Ticket 26 Lorem ipsum dolor amet consectetur',
            imageUrl: 'https://i.postimg.cc/mZXh8HMZ/image-5.png',
            description: 'desc',
            createdAt: new Date()
          }
        },
        {
          id: '422af8c5-0516-4c78-b81a-30858730fe36',
          cartId: '49f176b0-abee-4e2a-863a-a8f110ae903e',
          ticketId: 'f2919c5a-577d-421e-b374-331e827afb1f',
          subTotal: 1391.28,
          quantity: 5,
          createdAt: new Date(),
          ticket: {
            id: 'f2919c5a-577d-421e-b374-331e827afb1f',
            name: 'Ticket 27 Lorem ipsum dolor amet consectetur',
            imageUrl: 'https://i.postimg.cc/mZXh8HMZ/image-5.png',
            description: 'desc',
            createdAt: new Date()
          }
        }
      ]
    },
    open: true
  }
}
