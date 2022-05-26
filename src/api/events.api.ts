import { http } from '../config/http'
import { EVENTS } from './endpoints'

export const EventsApi = {
  find(params?: any) {

    return http.get(EVENTS, { params })
  },

  findOne({ id }: { id: number }) {
    const url = `${EVENTS}/${id}`
    return http.get(url)
  },
}