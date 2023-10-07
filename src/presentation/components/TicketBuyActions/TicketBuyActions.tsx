import { currencyFormat, getTodayDate } from '@/utils'
import { Button, Heading, Separator, Text } from '@/presentation/components'
import { IconArrowDown, IconCalendar, IconUser } from '@/presentation/components/icons'
import '@/presentation/components/TicketBuyActions/TicketBuyActions.scss'

interface TicketBuyActionsProps {
  value: number
  loading?: boolean
  onBuyTicket: () => void
}

export function TicketBuyActions({ value, loading = false, onBuyTicket }: TicketBuyActionsProps) {
  return (
    <div className="ticket-buy-actions">

      <div className="ticket-buy-actions__date-select">
        <div>
          <IconCalendar size={24} color="var(--brand-color-blue)" />
          <div>
            <Text weigth="bold">Data do Ingresso</Text>
            <Text color="gray" weigth="medium">{getTodayDate()}</Text>
          </div>
        </div>

        <IconArrowDown size={24} color="black" />
      </div>

      <Separator/>

      <div className="ticket-buy-actions__ticket-select">
        <div>
          <IconUser size={24} color="var(--brand-color-blue)" />
          <div>
            <Text weigth="bold">Ingressos</Text>
            <Text color="gray" weigth="medium">01 Ingresso</Text>
          </div>
        </div>

        <IconArrowDown size={24} color="black" />
      </div>

      <Separator />

      <div className="ticket-buy-actions__ticket-quantity">
        <Text color="gray" weigth="medium">01 Ingresso</Text>
        <Text color="gray" weigth="medium">{currencyFormat(value)}</Text>
      </div>

      <Separator />

      <div className="ticket-buy-actions__total">
        <Text weigth="bold">Valor Total</Text>
        <Heading weigth="bold" color="blue">{currencyFormat(value)}</Heading>
      </div>

      <Button size="lg" onClick={onBuyTicket} loading={loading}>Comprar Ingresso</Button>
    </div>
  )
}
