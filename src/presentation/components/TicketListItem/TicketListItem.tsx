import { Button, Heading, Review, Text } from '@/presentation/components'
import { IconArrowUpRight, IconHeart, IconPinLocation } from '@/presentation/components/icons'
import '@/presentation/components/TicketListItem/TicketListItem.scss'

interface Price {
  originalValue: number
  value: number
  discount?: number
}

interface Address {
  city: string
  state: string
  country: string
}

interface Review {
  value: number
}

export interface TicketListItemProps {
  id: string
  name: string
  description: string
  imageUrl: string
  price: Price
  address: Address
  reviews: Review[]
  onClick: (id: string) => void
}

export function TicketListItem({ id, name, imageUrl, address, reviews, price, onClick }: TicketListItemProps) {
  const review = {
    value: Number((reviews.reduce((acc, cur) => cur.value + acc, 0) / reviews.length).toFixed(1)),
    total: reviews.length
  }

  return (
    <div className="ticket-item">
      <div className="ticket-item__image">
        <img src={imageUrl} alt="img" />
        <span><Text size="sm" weigth="bold">Ingresso</Text></span>
        <IconHeart size={24} color="var(--gray-00)"/>
      </div>

      <div className="ticket-item__body">
        <div className="content" >
          <div className="info">
            <div className="header">
              <Heading size="h2" weigth="bold">{name}</Heading>
              <Text size="nm" weigth="medium"><IconPinLocation size={24} color="var(--brand-color-blue)" />
                {`${address.city} - ${address.state}`}
              </Text>
            </div>

            <Review value={review.value} total={review.total} />
          </div>

          <div className="price">
            <Text size="nm" weigth="medium">de R$ {price.originalValue} por</Text>

            <div>
              <Text size="nm" weigth="medium">R$</Text>
              <Heading size="h2" color="blue" weigth="bold">{price.value}</Heading>
            </div>

            <Button icon={<IconArrowUpRight />} onClick={() => onClick(id)}>Saber Mais</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
