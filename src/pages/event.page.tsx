import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Topbar, LayoutContainer, Layer, H2 } from '../components/shared'
import { Attendee, Event, Item, Ticket } from '../models'
import { EventsService } from '../services'
import {
  CartPanel,
  EventInfo,
  FooterPanel,
  FormAttendee,
  TicketItem,
} from '../components/event'
import { useTranslation } from 'react-i18next'

const EventPage: React.FC = (): JSX.Element => {
  const [event, setEvent] = useState<Event>()
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [attendees, setAttendees] = useState<Attendee[]>([])
  const { id } = useParams()
  const { t } = useTranslation()

  enum Layers {
    EVENT = 0,
    TICKETS = 1,
    PURCHASE = 2,
  }

  const [visibleLayer, setVisibleLayer] = useState<number>(Layers.EVENT)

  const shouldBeVisible = (layer: number): boolean => {
    return layer === visibleLayer
  }

  const handleSelect = (item: Item): void => {
    const nextSelectedItems = composeSelectedItems(selectedItems, item)

    setSelectedItems(nextSelectedItems)
  }

  const handleChange = (attendee: Attendee): void => {
    const offsetAttendees = attendees.filter((prevAttendee) => (
      attendee.id !== prevAttendee.id
    ))
    const nextAttendees = [...offsetAttendees, attendee]

    setAttendees(nextAttendees)
  }

  useEffect(() => {
    EventsService.fetchOne({ id: Number(id) }).then(setEvent)
  }, [id])

  useEffect(() => {
    console.log({ attendees})
  }, [attendees])

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

        <CartPanel
          items={selectedItems}
          onContinue={() => setVisibleLayer(Layers.PURCHASE)}
        />
      </Layer>



      <Layer
        isVisible={shouldBeVisible(Layers.PURCHASE)}
        onClose={() => setVisibleLayer(Layers.EVENT)}
      >
        <LayoutContainer>
          <H2>Quem vai participar?</H2>

          {selectedItems.map((item) => (
            Array(item.amount).fill(item.ticket).map((ticket, i) => (
              <FormAttendee
                id={composeId(ticket, i)}
                onChange={handleChange}
                title={ticket.title}
                key={ticket.title}
              />
            ))
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

function composeId(ticket: Ticket, index: number): string {
  return `${ticket.id}-${index+1}`
}