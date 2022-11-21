export interface Ticket {
  description: string
  endAt: Date
  id: number | string
  isAvailable: boolean
  price: number // in cents
  title: string
}
