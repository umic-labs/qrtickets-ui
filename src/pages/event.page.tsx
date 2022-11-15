import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Topbar, LayoutContainer, Layer, H2 } from '../components/shared'
import { Event, Item } from '../models'
import { EventsService } from '../services'
import {
  CartPanel,
  EventInfo,
  FooterPanel,
  TicketItem,
} from '../components/event'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'

const EventPage: React.FC = (): JSX.Element => {
  const [event, setEvent] = useState<Event>()
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const { id } = useParams()
  const { t } = useTranslation()

  enum Layers {
    EVENT = 0,
    TICKETS = 1,
  }

  const [visibleLayer, setVisibleLayer] = useState<number>(Layers.EVENT)

  const shouldBeVisible = (layer: number): boolean => {
    return layer === visibleLayer
  }

  const handleSelect = (item: Item): void => {
    // setSelectedItems([item])
  }

  useEffect(() => {
    EventsService.fetchOne({ id: Number(id) }).then(setEvent)
  }, [id])

  return (
    <Wrapper>
      <Layer isVisible={shouldBeVisible(Layers.EVENT)} isMain>
        <LayoutContainer hasNavbar>
          <Topbar>{event?.title}</Topbar>

          <EventInfo event={event} />

          <FooterPanel onSubmit={() => setVisibleLayer(Layers.TICKETS)} />
        </LayoutContainer>
      </Layer>

      <Layer
        isVisible={shouldBeVisible(Layers.TICKETS)}
        onClose={() => setVisibleLayer(Layers.EVENT)}
      >
        <LayoutContainer>
          <H2>{t('event_page.tickets_subtitle')}</H2>

          {event?.tickets?.map((ticket) => (
            <TicketItem
              ticket={ticket}
              key={ticket.id}
              onSelect={handleSelect}
            />
          ))}
        </LayoutContainer>

        <CartPanel items={selectedItems} onContinue={console.log} />
      </Layer>
    </Wrapper>
  )
}

export default EventPage

export const Wrapper = styled('div')``
