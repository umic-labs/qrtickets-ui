import React, { useEffect, useState } from 'react'
import { Topbar, LayoutPage } from '../components/shared'
import { Event } from '../models'
// import { mockEvent } from '../models/mocks'
import { EventsService } from '../services/event.service'

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
      
      <LayoutPage>
        <>
          {events[0]?.title}
        </>
      </LayoutPage>
    </>
  )
}

export default HomePage
