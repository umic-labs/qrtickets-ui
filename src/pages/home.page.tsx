import React from 'react'
import { Shelf } from '../components/home'
import { Topbar } from '../components/shared'
import LayoutPage from '../components/shared/layout-page'
import { VolumesService } from '../services'

const HomePage: React.FC = (): JSX.Element => {

  const [adventures] = VolumesService.useList({ q: 'adventure' })
  const [kids] = VolumesService.useList({ q: 'kids' })
  const [featured] = VolumesService.useList({ q: 'top' })
  const [action] = VolumesService.useList({ q: 'action' })

  return (
    <>
      <Topbar />
      
      <LayoutPage>
        <>
          <Shelf title="Aventura" volumes={adventures} />
          <Shelf title="Infantil" volumes={kids} />
          <Shelf title="Destaque" volumes={featured} isFeatured />
          <Shelf title="Acao" volumes={action} />
        </>
      </LayoutPage>
    </>
  )
}

export default HomePage
