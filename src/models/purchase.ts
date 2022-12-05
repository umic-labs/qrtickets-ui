import { Attendee } from './attendee'
import { Preference } from './preference'

export interface Purchase {
  id: number
  email: string
  total: number
  name: string
  cpf: string
  attendees?: Attendee[]
  status: 'pending' | 'paid'
  preference: Preference
  preferenceId: string
}
