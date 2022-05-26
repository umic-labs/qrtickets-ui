export interface IMeta {
  pagination?: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}

export interface IData {
  id: number
  attributes: any
}

export interface IMetaData<T> {
  data: T
  meta: IMeta
}
