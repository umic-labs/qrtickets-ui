import { Image } from "./image"

export interface Event {
  beginAt: Date
  description: string
  endAt: Date
  id?: number
  locationAddress: string
  locationCoordinates: string
  locationTitle: string
  title: string
  thumbnail?: Image
}
