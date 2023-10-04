import type { Meta, StoryObj } from '@storybook/react'
import { TicketListItem } from '@/presentation/components'

const meta: Meta<typeof TicketListItem> = {
  component: TicketListItem,
  title: 'App/TicketListItem',
  argTypes: { onClick: { action: 'clicked' } }
}

export default meta
type Story = StoryObj<typeof TicketListItem>

export const Default: Story = {
  args: {
    id: 'b2ccbe5a-43a8-4634-b3c6-b362986dd250',
    name: 'Lorem ipsum dolor amet consectetur',
    description: '',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/6100/5c68/da34365b4777e61b21faaca0291e3746?Expires=1697414400&Signature=lU7X5qVmUNss2PVDS19-uGFfP76zn7tnibMcNISdoYPozYOevu82Bx9BmDWDRX0BhzPXz8BfNfi2vhsSxVjY7ua~Fcz7VflUwWs2pOGiLUYLKehbkIlfI6aKRnmWGzhoOdy05hUYlnyDbTvT3-gF8xLol98XUcwKEbNJVmvqree-gabQnlw9JrHheBcleSRUJhmrHOw4al~bOxkmrViqLcal6pxZ8GStMDwmsQBjaco31CDuU5vbGLH~-NUiye8Qa9jEdxQrZc3M0rHwh6grhUZ9uI1JvFLlw0BjE~b1e8flLUwo89gs82Zy6qzzw8zqIPacC0IQjDS0FIl6xUyBVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    address: { city: 'GetYourGuide Tours & Tickets Gmbh', state: 'São Paulo', country: 'Brazil' },
    price: { originalValue: 2351.28, discount: 960, value: 1391.28 },
    reviews: [{ value: 7 }, { value: 3.4 }, { value: 8.5 }]
  }
}
