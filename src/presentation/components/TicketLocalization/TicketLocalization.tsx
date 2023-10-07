import { Heading } from '@/presentation/components'
import '@/presentation/components/TicketLocalization/TicketLocalization.scss'
import LocalizationImage from '@/presentation/assets/images/localization.png'

export function TicketLocalization() {
  return (
    <div className="ticket-localization">
      <Heading weigth="bold">Localização</Heading>
      <img src={LocalizationImage} alt="localization" />
    </div>
  )
}
