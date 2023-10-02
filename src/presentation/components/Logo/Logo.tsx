import { IconLogo } from '@/presentation/components/icons'
import { Heading } from '@/presentation/components'
import '@/presentation/components/Logo/Logo.scss'

export function Logo() {
  return (
    <div className="logo">
      <IconLogo size={48} />
      <Heading size="h1" weigth="bold">TicketHub•</Heading>
    </div>
  )
}
