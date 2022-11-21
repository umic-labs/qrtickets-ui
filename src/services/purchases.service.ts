import { Attendee, Purchase } from '../models'
import { PurchasesApi } from '../api/purchases.api'
import { IData } from '../config/types'

interface PropsCreate {
  attendees: Attendee[]
  cpf: string
  email: string
  eventId: number
  name: string
  total: number
}

export const PurchasesService = {
  async create({
    attendees,
    cpf,
    email,
    eventId,
    name,
    total,
  }: PropsCreate): Promise<Purchase> {
    const payload = composePayload(
      { name, email, cpf, attendees, total, eventId },
    )

    const purchase = await PurchasesApi.create(payload).then((response) => {
      return composePurchase(response.data.data)
    })

    return purchase
  },
}

const composePayload = ({
  attendees,
  cpf,
  email,
  eventId,
  name,
  total,
}: PropsCreate) => {
  return {
    data: {
      cpf,
      email,
      event: eventId,
      name,
      total,
      Attendees: {
        data: attendees,
      },
    },
  }
}

const composePurchase = (data: IData): Purchase => {
  const { attributes } = data

  console.log({ data })

  return {
    id: data.id,
    email: attributes['email'],
    total: attributes['total'],
    name: attributes['name'],
    cpf: attributes['cpf'],
    // attendees: Attendee[]
  }
}