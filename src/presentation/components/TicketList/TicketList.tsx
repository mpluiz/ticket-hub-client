import { TicketListItem, TicketListItemProps } from '@/presentation/components'
import '@/presentation/components/TicketList/TicketList.scss'

interface TicketListProps {
  tickets: TicketListItemProps[],
}

export function TicketList({ tickets }: TicketListProps) {
  return (
    <div className="ticket-list">
      {tickets && tickets.map(ticket => (
        <TicketListItem
          key={ticket.id}
          id={ticket.id}
          name={ticket.name}
          imageUrl={ticket.imageUrl}
          price={ticket.price}
          address={ticket.address}
          reviews={ticket.reviews}
          onClick={ticket.onClick}
        />
      ))}
    </div>
  )
}
