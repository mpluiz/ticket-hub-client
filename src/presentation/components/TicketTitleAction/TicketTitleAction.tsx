import { IconArrowUpLeft, IconPinLocation } from '@/presentation/components/icons'
import { ComponentProps, Heading, Text } from '@/presentation/components'
import '@/presentation/components/TicketTitleAction/TicketTitleAction.scss'

interface TicketTitleActionProps extends ComponentProps<HTMLDivElement> {
  title: string
  address: { city: string, state: string }
  onClick?: () => void
}

export function TicketTitleAction({ title, address, onClick }: TicketTitleActionProps) {
  return (
    <div className="ticket-title-action">
      <div className="ticket-title-action__action" onClick={onClick}><IconArrowUpLeft size={24} color="black" /></div>
      <div className="ticket-title-action__title">
        <Heading size="h2" weigth="bold">{title}</Heading>
        <Text size="nm" weigth="medium"><IconPinLocation size={24} color="var(--brand-color-blue)" />
          {`${address.city} - ${address.state}`}
        </Text>
      </div>
    </div>
  )
}
