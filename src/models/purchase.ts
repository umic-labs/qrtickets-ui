import { Attendee } from './attendee'

export interface Purchase {
  id: number
  email: string
  total: number
  name: string
  cpf: string
  attendees?: Attendee[]
}
