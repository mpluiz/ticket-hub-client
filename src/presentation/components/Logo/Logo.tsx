import { IconLogo } from '@/presentation/components/icons'
import { ComponentProps, Heading } from '@/presentation/components'
import '@/presentation/components/Logo/Logo.scss'

type LogoProps = ComponentProps<HTMLDivElement>

export function Logo(params: LogoProps) {
  return (
    <div className="logo" {...params}>
      <IconLogo size={48} />
      <Heading size="h1" weigth="bold">TicketHub•</Heading>
    </div>
  )
}
