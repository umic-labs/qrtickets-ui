import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Topbar, LayoutContainer, Layer, H1, H2 } from '../components/shared'
import { Event } from '../models'
import { EventsService } from '../services'
import { EventInfo, TicketItem } from '../components/event'
import { useTranslation } from 'react-i18next'
import { AppBar, Toolbar } from '@mui/material'
import { Box } from '@mui/system'

const EventPage: React.FC = (): JSX.Element => {
  const [event, setEvent] = useState<Event>()
  const { id } = useParams()
  const { t } = useTranslation()
  
  enum Layers { EVENT = 0, TICKETS = 1 }

  const [visibleLayer, setVisibleLayer] = useState<number>(Layers.EVENT)

  const shouldBeVisible = (layer: number): boolean => {
    return layer === visibleLayer
  }

  useEffect(() => {
    EventsService.fetchOne({ id: Number(id) }).then(setEvent)
  }, [id])

  return (
    <>
      <Layer isVisible={shouldBeVisible(Layers.EVENT)}>
        <LayoutContainer hasNavbar>
          <Topbar>{event?.title}</Topbar>

          <EventInfo event={event} />

          <div>
            <p>{t('event_info.from_price_subtitle')}</p>
            <h2>R$ 99,90</h2>

            <button onClick={() => setVisibleLayer(Layers.TICKETS)}>
              {t('event_info.sign_up_button')}
            </button>
          </div>
        </LayoutContainer>
      </Layer>


      <Layer isVisible={shouldBeVisible(Layers.TICKETS)}>
        <LayoutContainer>
          <H2>Quantos ingressos?</H2>

          {
            event?.tickets?.map((ticket) => (
              <TicketItem ticket={ticket} key={ticket.id} />
            ))
          }
        </LayoutContainer>
      </Layer>
    </>
  )
}

export default EventPage
