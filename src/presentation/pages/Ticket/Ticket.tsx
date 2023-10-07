import { useQuery } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, DisplayLoader, NavBar, TicketGallery, TicketTitleAction } from '@/presentation/components'
import GetTicket from '@/main/graphql/queries/GetTicket.ts'
import '@/presentation/pages/Ticket/Ticket.scss'

export function TicketPage() {
  const { ticketId = '' } = useParams()
  const navigation = useNavigate()
  const { data, loading } = useQuery(GetTicket, { variables: { id: ticketId } })

  return (
    <>
      <NavBar />

      <Container className="ticket-page">
        {data && (
          <>
            <TicketTitleAction
              title={data.ticket.name}
              address={data.ticket.address}
              onClick={() => navigation(-1)}
            />

            <TicketGallery background="https://i.postimg.cc/pLXxKFBb/background.png" />
          </>
        )}
      </Container>

      {loading && <DisplayLoader/>}
    </>
  )
}
