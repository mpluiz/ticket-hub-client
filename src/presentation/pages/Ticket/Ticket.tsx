import { useQuery } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Amenities,
  Container,
  DisplayLoader,
  Heading,
  NavBar,
  Review,
  Text,
  TicketBuyActions,
  TicketGallery,
  TicketLocalization,
  TicketTitleAction
} from '@/presentation/components'
import { useCartStore } from '@/presentation/store/useCartStore.ts'
import GetTicket from '@/main/graphql/queries/GetTicket.ts'
import '@/presentation/pages/Ticket/Ticket.scss'

export function TicketPage() {
  const { ticketId = '' } = useParams()
  const navigation = useNavigate()
  const { data, loading } = useQuery(GetTicket, { variables: { id: ticketId } })
  const { cart, loading: cartLoading, createCartItem, setCartOpen } = useCartStore()

  const review = (reviews: [{ value: number }]) => ({
    value: Number((reviews.reduce((acc, cur) => cur.value + acc, 0) / reviews.length).toFixed(1)),
    total: reviews.length
  })

  async function handleBuyTicket(ticket: any) {
    await createCartItem({ cartId: cart?.id, ticketId: ticket.id, subTotal: ticket.price.value, quantity: 1 })
    setCartOpen(true)
  }

  return (
    <>
      <NavBar />

      <Container className="ticket-page">
        {data && (
          <>
            <TicketTitleAction
              title={data.ticket.name}
              address={data.ticket.address}
              onClick={() => navigation('/')}
            />

            <TicketGallery background="https://i.postimg.cc/pLXxKFBb/background.png" />

            <Container className="ticket-page__content">
              <div className="about">
                <Review value={review(data.ticket.reviews).value} total={review(data.ticket.reviews).total} />
                <Amenities amenities={data.ticket.amenities} />

                <Heading weigth="bold">Sobre o Ingresso selecionado:</Heading>
                <Text color="gray">{data.ticket.description}</Text>

                <TicketLocalization />
              </div>

              <TicketBuyActions
                value={data.ticket.price.value}
                loading={cartLoading}
                onBuyTicket={() => handleBuyTicket(data.ticket)}
              />

            </Container>
          </>
        )}
      </Container>

      {loading && <DisplayLoader />}
    </>
  )
}
