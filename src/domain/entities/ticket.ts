export interface Ticket {
  id: string
  name: string
  description: string
  imageUrl: string
  amenities?: string[]
  createdAt: Date
  updatedAt?: Date | null
}
