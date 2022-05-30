import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Topbar, LayoutPage } from '../components/shared'
import { Event } from '../models'
import { EventsService } from '../services/event.service'
import { EventInfo } from '../components/home/EventInfo'

const EventPage: React.FC = (): JSX.Element => {
  const [event, setEvent] = useState<Event>()
  const { id } = useParams()

  useEffect(() => {
    EventsService.fetchOne({ id: Number(id) }).then(setEvent)
  }, [id])

  return (
    <>
      <Topbar>{event?.title}</Topbar>
      
      <LayoutPage>
        <EventInfo event={event} />
      </LayoutPage>
    </>
  )
}

export default EventPage
