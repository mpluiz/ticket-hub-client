import { Button, ComponentProps } from '@/presentation/components'
import '@/presentation/components/TicketGallery/TicketGallery.scss'

interface TicketTitleActionProps extends ComponentProps<HTMLDivElement> {
  background: string
  images?: string[]
}

export function TicketGallery({ background }: TicketTitleActionProps) {
  return (
    <div className="ticket-gallery">
      <img src={background} alt="background" />
      <Button type="button" variant="secondary">Visualizar mais fotos</Button>
    </div>
  )
}
