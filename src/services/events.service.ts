import { IData } from "../config/types"
import { Event } from "../models"
import { EventsApi } from "../api"
import {
  createOne as createOneTicket
} from "./tickets.service";


export const EventsService = {
  async fetch(): Promise<Event[]> {
    const events = await EventsApi.find().then((response) => {
      return response.data.data.map(createOne)
    })

    return events
  },

  async fetchOne({ id }: { id: number }): Promise<Event> {
    const event = await EventsApi.findOne({ id }).then((response) => {
      return createOne(response.data.data)
    })

    return event
  },
}

function createOne(data: IData): Event {
  const { attributes } = data

  return {
    beginAt: new Date(attributes["beginAt"]),
    description: attributes["description"],
    endAt: new Date(attributes["endAt"]),
    id: data.id,
    locationAddress: attributes["locationAddress"],
    locationCoordinates: attributes["locationCoordinates"],
    locationTitle: attributes["locationTitle"],
    title: attributes["title"],
    tickets: attributes["tickets"].data?.map(createOneTicket),
    thumbnail: attributes?.thumbnail?.data?.attributes,
  };
}