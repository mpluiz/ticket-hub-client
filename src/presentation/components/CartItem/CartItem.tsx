import { Loader, Separator, Text } from '@/presentation/components'
import { IconTrash } from '@/presentation/components/icons'
import { currencyFormat } from '@/utils'
import '@/presentation/components/CartItem/CartItem.scss'

interface CartItemProps {
  id: string
  name: string
  imageUrl: string
  quantity: number
  value: number
  loading?: boolean
  onRemove: (id: string) => void
}

export function CartItem({ id, name, imageUrl, quantity, value, onRemove, loading = false }: CartItemProps) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="image" />

      <div className="cart-item__content">
        <div className="details">
          <div className="name">
            <Text>{name}</Text>
            <Text size="nm">Unidade: {currencyFormat(value)}</Text>
          </div>

          <div className="action" onClick={() => onRemove(id)}>
            {loading && <Loader size="md" />}
            {!loading && <IconTrash size={24} color="var(--support-04)" />}
          </div>
        </div>
        <Separator />
        <div className="values">
          <div className="quantity">
            <Text color="gray">Qtd {quantity}</Text>
            <Text color="gray">{currencyFormat(value)}</Text>
          </div>

          <div className="total">
            <Text weigth="bold">Subtotal</Text>
            <Text weigth="bold">{currencyFormat(value * quantity)}</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
