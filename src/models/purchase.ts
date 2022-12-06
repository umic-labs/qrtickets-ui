import { Attendee } from './attendee'
import { Preference } from './preference'

export interface Purchase {
  id: number
  email: string
  total: number
  name: string
  cpf: string
  attendees?: Attendee[]
  status: 'pending' | 'approved'
  preference: Preference
  preferenceId: string
}
