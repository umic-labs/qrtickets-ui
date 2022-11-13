export interface Ticket {
  description: string
  endAt: Date
  id?: number
  isAvailable: boolean
  price: number // in cents
  title: string
}
