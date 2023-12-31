import { TicketListItem, TicketListItemProps } from '@/presentation/components'
import '@/presentation/components/TicketList/TicketList.scss'

interface TicketListProps {
  tickets: TicketListItemProps[],
  onItemClick: (id: string) => void
}

export function TicketList({ tickets, onItemClick }: TicketListProps) {
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
          onClick={onItemClick}
        />
      ))}
    </div>
  )
}
