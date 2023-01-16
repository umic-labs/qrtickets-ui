import { Attendee, Item, Purchase } from '../models'
import { PurchasesApi } from '../api/purchases.api'
import { IData } from '../config/types'

interface PropsCreate {
  attendees: Attendee[]
  cpf: string
  email: string
  eventId: number
  items: Item[]
  name: string
  phoneNumber: string
}

export const PurchasesService = {
  async create({
    attendees,
    cpf,
    email,
    eventId,
    items,
    name,
    phoneNumber,
  }: PropsCreate): Promise<Purchase> {
    const payload = composePayload( { name, email, cpf, attendees, eventId, items, phoneNumber } )

    const purchase = await PurchasesApi.create(payload).then((response) => {
      return composePurchase(response.data.data)
    })

    return purchase
  },

  async findByPreference(preferenceId: string): Promise<Purchase> {
    const purchase = await PurchasesApi.findByPreference({ preferenceId })
      .then((response) => {
        return composePurchase(response?.data.data)
      })

    return purchase
  },

  async feedback(
    { preferenceId, params }: { preferenceId: string, params?: unknown },
  ): Promise<Purchase> {
    const purchase = await PurchasesApi.feedback({ preferenceId, params })
      .then((response) => {
        return composePurchase(response?.data.data)
      })

    return purchase
  },
}

const composePayload = ({
  attendees, cpf, email, eventId, name, items, phoneNumber,
}: PropsCreate) => {
  const itemsPayload = composeItemsPayload(items)
  const total = composeTotal(items)

  return {
    data: {
      cpf,
      email,
      event: eventId,
      items: itemsPayload,
      name,
      phoneNumber,
      total,
      Attendees: {
        data: attendees,
      },
    },
  }
}

const composePurchase = (data: IData): Purchase => {
  const { attributes } = data

  return {
    id: data.id,
    email: attributes['email'],
    total: attributes['total'],
    name: attributes['name'],
    cpf: attributes['cpf'],
    status: attributes['status'],
    preference: attributes['preference'],
    preferenceId: attributes['preferenceId'],
    // attendees: Attendee[]
  }
}

interface ItemPayload {
    id: number
    title: string
    currency_id: string
    description: string
    category_id: string
    quantity: number
    unit_price: number  // in BRL units
}

const composeItemsPayload = (items: Item[]): ItemPayload[] => {
  return items.map( item => ({
    id: Number(item.ticket.id),
    title: item.ticket.title,
    currency_id: 'BRL',
    description: item.ticket.description,
    category_id: 'art',
    quantity: item.amount,
    unit_price: (item.ticket.price/100),
  }))
} 

const composeTotal = (items: Item[]): number => {
  const total = items.reduce((acc, item) => {
    return acc + (item.ticket.price * item.amount)
  }, 0)

  return total
}
