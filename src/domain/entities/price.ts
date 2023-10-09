export interface Price {
  id: string
  ticketId: string
  discount: number
  originalValue: number
  value: number
  createdAt: Date
}
