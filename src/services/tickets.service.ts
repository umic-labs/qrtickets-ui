import { IData } from "../config/types"
import { TicketsApi } from "../api"
import { Ticket } from "../models/ticket"

export const TicketsService = {
  async fetch({ eventId }: { eventId: number}): Promise<Ticket[]> {
    const events = await TicketsApi.find({ eventId }).then((response) => {
      return response.data.data.map(createOne)
    })

    return events
  },

  async fetchOne({ eventId, id }: { eventId: number, id: number }): Promise<Ticket> {
    const event = await TicketsApi.findOne({ eventId, id }).then((response) => {
      return createOne(response.data.data);
    });

    return event
  },
}

export function createOne(data: IData): Ticket {
  const { attributes } = data

  return {
    description: attributes['description'],
    endAt: new Date(attributes['endAt']),
    id: data.id,
    isAvailable: attributes['isAvailable'],
    price: attributes['price'],
    title: attributes['title'],    
  }
}