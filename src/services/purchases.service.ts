import { Attendee, Event } from '../models'
import { PurchasesApi } from '../api/purchases.api'

export const PurchasesService = {
  async create({ name, email, cpf, attendees }: {
    name: string
    email: string
    cpf: string
    attendees: Attendee[]
  }): Promise<Event[]> {

    const payload = composePayload({ name, email, cpf, attendees })

    const purchase = await PurchasesApi.create(payload).then((response) => {
      console.log(response.data)
      return response.data
    })

    return purchase
  },
}


const composePayload = ({ name, email, cpf, attendees }: {
    name: string
    email: string
    cpf: string
    attendees: Attendee[]
  }) => {
  return {
    'data': {
      name,
      email,
      cpf,
      'event': '1',
      'total': '150000',
      'Attendees': {
        'data': attendees,
      },
    },
  }
}