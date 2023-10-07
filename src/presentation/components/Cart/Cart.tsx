import { useOutsideClick } from '@/presentation/hooks'
import { currencyFormat } from '@/utils'
import { Button, CartItem, Heading, Separator, Text } from '@/presentation/components'
import '@/presentation/components/Cart/Cart.scss'

export interface CartProps {
  open: boolean
  setClose: () => void
}

export function Cart({ open, setClose }: CartProps) {
  const ref = useOutsideClick(setClose)
  if (!open) return

  return (
    <div className="cart" ref={ref}>
      <Text weigth="bold">Ingressos</Text>

      <div className="cart__items">
        <CartItem
          name="Ingresso Universal 2 park to 2 dias flexivel - 15/09/2022"
          imageUrl="https://i.postimg.cc/NGydj1QZ/image-1.png"
          quantity={1}
          value={currencyFormat(1468.60)}
        />
      </div>

      <Separator/>

      <div className="cart__info">
        <div>
          <Text color="gray">Ingressos</Text>
          <Text color="gray">{currencyFormat(1468.60)}</Text>
        </div>
        <div>
          <Text weigth="bold">Subtotal</Text>
          <Text weigth="bold">{currencyFormat(1468.60)}</Text>
        </div>
        <div>
          <div>
            <Text color="gray">1X de {currencyFormat(1468.60 * 0.93)} com desconto de</Text>
            <Text color="green">{`(${7}%)`}</Text>
          </div>
          <Text color="green">-{currencyFormat(102.80)}</Text>
        </div>
        <div>
          <Text color="gray">10X Sem juros de {currencyFormat(1468.60)}</Text>
          <Text color="gray">{currencyFormat(1468.60)}</Text>
        </div>
      </div>

      <Separator/>

      <div className="cart__total-value">
        <Text weigth="bold">Valor Total</Text>
        <Heading weigth="bold" color="blue">{currencyFormat(1468.60)}</Heading>
      </div>

      <Button size="lg">Ir para o checkout</Button>
    </div>
  )
}
