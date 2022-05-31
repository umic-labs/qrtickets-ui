import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Topbar, LayoutPage } from '../components/shared'
import { Event } from '../models'
import { EventsService } from '../services/event.service'
import { EventInfo } from '../components/home'
import { useTranslation } from 'react-i18next'

const EventPage: React.FC = (): JSX.Element => {
  const [event, setEvent] = useState<Event>()
  const { id } = useParams()
  const { t } = useTranslation()

  useEffect(() => {
    EventsService.fetchOne({ id: Number(id) }).then(setEvent)
  }, [id])

  return (
    <>
      <Topbar>{event?.title}</Topbar>
      
      <LayoutPage>
        <EventInfo event={event} />

        <div>
          <p>{t('event_info.from_price_subtitle')}</p>
          <h2>R$ 99,90</h2>

          <button>{t('event_info.sign_up_button')}</button>
        </div>
      </LayoutPage>
    </>
  )
}

export default EventPage
