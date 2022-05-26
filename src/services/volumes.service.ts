import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { VolumesApi } from '../api'
import { ApiData, IQueryParams } from '../config/types'
import { Volume } from '../models'

const actions = {
  createMultiple(data: ApiData<Volume>): Volume[] {
    if (!data) return []
    return data.items
  },
}

const hooks = {
  useList(params?: IQueryParams): [volumes: Volume[], updateVolumes: Function] {
    const [volumes, setVolumes] = useState<Volume[]>([])

    useEffect(() => {
      updateVolumes(params)
    }, [])
    
    function updateVolumes(params?: IQueryParams): Promise<Volume[]> {
      return new Promise(async (resolve, reject) => {
        VolumesApi.list(params)
          .then((response: AxiosResponse) => {
            const nextVolumes = actions.createMultiple(response?.data)
            setVolumes(nextVolumes)
            resolve(nextVolumes)
          })
          .catch(reject)
      })
    }

    return [ volumes, updateVolumes ]
  },
}

export const VolumesService = {
  ...actions,
  ...hooks,
}
