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
    const nextSelectedItems = composeSelectedItems(selectedItems, item)

    setSelectedItems(nextSelectedItems)
  }

  useEffect(() => {
    EventsService.fetchOne({ id: Number(id) }).then(setEvent)
  }, [id])

  return (
    <>
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
    </>
  )
}

export default EventPage

function composeSelectedItems(selectedItems: Item[], item: Item) {
  const offSelectedItems = selectedItems.filter(prevSelectedItem => {
    return prevSelectedItem.ticket.id !== item.ticket.id
  })

  const nextSelectedItems = [
    ...offSelectedItems,
    ...(item.amount ? [item] : []),
  ]

  return nextSelectedItems
}

