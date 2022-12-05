import { http } from '../config/http'
import { PURCHASES_URL, PURCHASE_FIND_BY_PREFERENCE_URL } from './endpoints'
import urlcat from 'urlcat'

export const PurchasesApi = {
  create(payload?: unknown) {
    return http.post(PURCHASES_URL, payload)
  },

  findByPreference({ preferenceId }: { preferenceId: string }) {
    const url = urlcat('', PURCHASE_FIND_BY_PREFERENCE_URL, { preferenceId })
    return http.get(url)
  },
}
