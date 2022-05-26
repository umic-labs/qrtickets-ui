export interface ApiData<T = any> {
  kind: string
  totalItems: number
  items: T[]
}

export interface IQueryParams {
  q?: string
  startIndex?: number
  maxResults?: number
}
