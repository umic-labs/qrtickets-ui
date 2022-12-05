import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Topbar, LayoutContainer, Layer, H2 } from '../components/shared'
import { Attendee, Event, Item, Ticket } from '../models'
import { EventsService, PurchasesService } from '../services'
import {
  CartPanel,
  EventInfo,
  FooterPanel,
  FormAttendee,
  TicketItem,
} from '../components/event'
import { useTranslation } from 'react-i18next'
import { Button, FormControl, TextField } from '@mui/material'
import { Purchase } from '../models/purchase'


const EventPage: React.FC = (): JSX.Element => {
  const [attendees, setAttendees] = useState<Attendee[]>([])
  const [cpf, setCpf] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [event, setEvent] = useState<Event>()
  const [name, setName] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [visibleLayer, setVisibleLayer] = useState<number>(Layers.EVENT)
  const [purchase, setPurchase] = useState<Purchase>()

  const { id } = useParams()
  const { t } = useTranslation()

  const shouldBeVisible = (layer: number): boolean => {
    return layer === visibleLayer
  }

  const handleSelect = (item: Item): void => {
    const nextSelectedItems = composeSelectedItems(selectedItems, item)
    setSelectedItems(nextSelectedItems)
  }

  const handleChange = (attendee: Attendee): void => {
    const offsetAttendees = attendees.filter((prevAttendee) => (
      attendee.uid !== prevAttendee.uid
    ))
    const nextAttendees = [...offsetAttendees, attendee]

    setAttendees(nextAttendees)
  }

  const handleSubmit = (total: number): void => {
    PurchasesService.create(
      { name, email, cpf, attendees, total, eventId: Number(id) },
    ).then((purchase) => {
      setPurchase(purchase)
      window.location.replace(purchase.preference.init_point)
    })
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

        <CartPanel
          items={selectedItems}
          onContinue={() => setVisibleLayer(Layers.PURCHASE)}
        />
      </Layer>

      <Layer
        isVisible={shouldBeVisible(Layers.ATTENDEES)}
        onClose={() => setVisibleLayer(Layers.EVENT)}
      >
        <LayoutContainer>
          <H2>Quem vai participar?</H2>

          {selectedItems.map((item) => (
            Array(item.amount).fill(item.ticket).map((ticket, i) => (
              <FormAttendee
                uid={composeId(ticket, i)}
                onChange={handleChange}
                key={ticket.title}
                ticket={ticket}
              />
            ))
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
          <H2>Informações de pagamento</H2>

          <FormControl fullWidth>
            <TextField
              label="Nome"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: '8px' }}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: '8px ' }}
            />

            <TextField
              id="outlined-basic"
              label="CPF"
              variant="outlined"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              sx={{ marginBottom: '8px ' }}
            />
          </FormControl>
        </LayoutContainer>

        <CartPanel items={selectedItems} onContinue={handleSubmit} />
      </Layer>

      <Layer
        isVisible={shouldBeVisible(Layers.SUCCESS)}
        onClose={() => setVisibleLayer(Layers.EVENT)}
      >
        <LayoutContainer>
          <H2>Inscrição realizada</H2>

          <Button onClick={() => setVisibleLayer(Layers.TICKETS)}>
            Fechar
          </Button>

        </LayoutContainer>
      </Layer>
    </>
  )
}

export default EventPage

enum Layers {
  EVENT = 0,
  TICKETS = 1,
  ATTENDEES = 2,
  PURCHASE = 3,
  SUCCESS = 4,
}

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