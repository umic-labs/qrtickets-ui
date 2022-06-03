import React, { useEffect, useState } from 'react'
import { Topbar, LayoutContainer } from '../components/shared'
import { Event } from '../models'
import { EventsService } from '../services'

const HomePage: React.FC = (): JSX.Element => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    EventsService.fetch().then(setEvents)
  }, [])

  return (
    <>
      <Topbar>
        Home
      </Topbar>
      
      <LayoutContainer>
        <>
          {events[0]?.title}
        </>
      </LayoutContainer>
    </>
  )
}

export default HomePage
