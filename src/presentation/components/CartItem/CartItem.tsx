import { Loader, Separator, Text } from '@/presentation/components'
import { IconTrash } from '@/presentation/components/icons'
import '@/presentation/components/CartItem/CartItem.scss'

interface CartItemProps {
  name: string
  imageUrl: string
  quantity: number
  value: string
  loading?: boolean
}

export function CartItem({ name, imageUrl, quantity, value, loading = false }: CartItemProps) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="image" />

      <div className="cart-item__content">
        <div className="details">
          <div className="name">
            <Text>{name}</Text>
            <Text size="nm">Unidade: {value}</Text>
          </div>

          <div className="action" onClick={() => alert('remove')}>
            {loading && <Loader size="md" />}
            {!loading && <IconTrash size={24} color="rgba(100, 105, 129, 1)"/>}
          </div>
        </div>
        <Separator />
        <div className="values">
          <div className="quantity">
            <Text>Qtd {quantity}</Text>
            <Text>{value}</Text>
          </div>

          <div className="total">
            <Text weigth="bold">Subtotal</Text>
            <Text weigth="bold">{value}</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
