import { CartItem } from '@/domain/entities/cart-item.ts'

export interface Cart {
  id: string
  total: number
  subTotal: number
  cartItems?: CartItem[]
  createdAt: Date
  updatedAt?: Date | null
}
