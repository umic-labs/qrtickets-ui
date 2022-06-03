import { Image } from "./image"
import { Ticket } from "./ticket"

export interface Event {
  beginAt: Date
  description: string
  endAt: Date
  id?: number
  locationAddress: string
  locationCoordinates: string
  locationTitle: string
  title: string
  tickets?: Ticket[]
  thumbnail?: Image
}
