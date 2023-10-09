import { Button, ButtonProps } from '@/presentation/components'
import { IconShopCart } from '@/presentation/components/icons'
import '@/presentation/components/ButtonCart/ButtonCart.scss'

export interface ButtonCartProps extends ButtonProps {
  quantity: number
  onClick?: () => void
}

export function ButtonCart({ quantity = 0, ...others }: ButtonCartProps) {
  return (
    <Button className="button-cart" {...others}>
      <IconShopCart size={24} />
      <span className="button-cart__quantity">{quantity}</span>
    </Button>
  )
}
