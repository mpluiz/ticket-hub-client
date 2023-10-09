import { Ticket } from '@/domain/entities/ticket.ts'

export interface CartItem {
  id: string
  cartId: string
  ticketId: string
  subTotal: number
  quantity: number
  ticket: Ticket
  createdAt: Date
}
