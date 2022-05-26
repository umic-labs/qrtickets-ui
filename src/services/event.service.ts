import { IData } from "../config/types"
import { Event } from "../models"
import { EventsApi } from "../api"

export const EventsService = {
  async fetch(): Promise<Event[]> {
    let events = await EventsApi.find().then((response) => {
      return response.data.data.map(createOne)
    })

    return events
  }
}

function createOne(data: IData): Event {
  const { attributes } = data

  return {
    beginAt: new Date(attributes['beginAt']),
    description: attributes['beginAt'],
    endAt:  new Date(attributes['endAt']),
    id: data.id,
    locationAddress: attributes['locationAddress'],
    locationCoordinates: attributes['locationCoordinates'],
    locationTitle: attributes['locationTitle'],
    title: attributes['title'],
  }
}