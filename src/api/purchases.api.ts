import { http } from '../config/http'
import { PURCHASES_URL } from './endpoints'

export const PurchasesApi = {
  create(payload?: unknown) {
    return http.post(PURCHASES_URL, payload)
  },
}
