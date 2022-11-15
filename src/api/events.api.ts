import { http } from '../config/http'
import urlcat from 'urlcat'
import { EVENTS_URL, EVENTS_FIND_ONE_URL } from './endpoints'

export const EventsApi = {
  find(params?: any) {
    return http.get(EVENTS_URL, { params })
  },

  findOne({ id }: { id: number }) {
    const url = urlcat('', EVENTS_FIND_ONE_URL, { id })
    return http.get(url)
  },
}
