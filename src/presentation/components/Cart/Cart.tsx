import { useOutsideClick } from '@/presentation/hooks'
import { currencyFormat } from '@/utils'
import { Button, CartItem, Heading, Separator, Text } from '@/presentation/components'
import { Cart as CartEntity } from '@/domain/entities'
import '@/presentation/components/Cart/Cart.scss'

export interface CartProps {
  cart: CartEntity
  open: boolean
  loading?: boolean
  setClose: () => void
  onCartItemRemove: (id: string) => void
}

export function Cart({ cart, open, loading = false, setClose, onCartItemRemove }: CartProps) {
  const ref = useOutsideClick(setClose)
  if (!open) return

  return (
    <div className="cart" ref={ref}>
      <Text weigth="bold">Ingressos</Text>

      <div className="cart__items">
        {cart.cartItems?.map(cartItem => (
          <div className="item" key={`cart-item-${cartItem.id}`}>
            <CartItem
              key={cartItem.id}
              id={cartItem.id}
              name={cartItem.ticket.name}
              imageUrl={cartItem.ticket.imageUrl}
              quantity={cartItem.quantity}
              value={cartItem.subTotal}
              loading={loading}
              onRemove={onCartItemRemove}
            />

            <Separator />
          </div>

        ))}
      </div>

      {/* <Separator/> */}

      <div className="cart__info">
        <div>
          <Text color="gray">Ingressos</Text>
          <Text color="gray">{currencyFormat(cart.subTotal)}</Text>
        </div>
        <div>
          <Text weigth="bold">Subtotal</Text>
          <Text weigth="bold">{currencyFormat(cart.subTotal)}</Text>
        </div>
        <div>
          <div>
            <Text color="gray">1X de {currencyFormat(cart.subTotal * 0.93)} com desconto de</Text>
            <Text color="green">{`(${7}%)`}</Text>
          </div>
          <Text color="green">-{currencyFormat(cart.subTotal * 0.07)}</Text>
        </div>
        <div>
          <Text color="gray">10X Sem juros de {currencyFormat(cart.subTotal)}</Text>
          <Text color="gray">{currencyFormat(cart.subTotal)}</Text>
        </div>
      </div>

      <Separator />

      <div className="cart__total-value">
        <Text weigth="bold">Valor Total</Text>
        <Heading weigth="bold" color="blue">{currencyFormat(cart.total)}</Heading>
      </div>

      <Button
        size="lg"
        disabled={!cart.cartItems?.length}
        loading={loading}
        onClick={() => alert('checkout :)')}
      >
        Ir para o checkout
      </Button>
    </div>
  )
}
