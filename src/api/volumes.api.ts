import { http } from '../config/http'
import { IQueryParams } from '../config/types'
import { VOLUMES } from './endpoints'

export const VolumesApi = {
  list(params?: IQueryParams) {

    return http.get(VOLUMES, { ...defaultQuery, params })
  },
}

const defaultQuery: IQueryParams = {
  startIndex: 0,
  maxResults: 10,
  q: '',
}
