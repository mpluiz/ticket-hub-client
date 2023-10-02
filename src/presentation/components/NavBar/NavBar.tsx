import { ButtonCart, Logo, Text } from '@/presentation/components'
import { IconQuestionCheck, IconUser } from '@/presentation/components/icons'
import CountrySVG from '@/presentation/assets/images/country.svg'
import '@/presentation/components/NavBar/NavBar.scss'

export function NavBar() {
  return (
    <div className="navbar">
      <Logo />
      <div className="navbar__actions">
        <div className="navbar__quotation">
          <Text>Cotação dólar hoje: R$:5,53</Text>
          <img src={CountrySVG} alt="country image" />
          <IconQuestionCheck size={24} color="var(--brand-color-blue)" />
        </div>
        <div className="navbar__signin">
          <IconUser size={24} color="var(--brand-color-blue)" />
          <Text color="blue" weigth="bold">Entrar</Text>
        </div>
        <ButtonCart />
      </div>
    </div>
  )
}
