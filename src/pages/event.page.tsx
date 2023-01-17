import React, { useEffect, useState } from 'react'
import { Topbar, LayoutContainer, Layer, H2 } from '../components/shared'
import { Attendee, Event, Item } from '../models'
import { EventsService, PurchasesService } from '../services'
import {
  CartPanel,
  EventInfo,
  FooterPanel,
  FormAttendee,
  TicketItem,
  composeTotalAmount,
} from '../components/event'
import { useTranslation } from 'react-i18next'
import { Button, FormControl, TextField } from '@mui/material'
import validator from 'validator'
import { cpf as CPF } from 'cpf-cnpj-validator'
import slugify from 'slugify'


const EventPage: React.FC = (): JSX.Element => {
  const [attendees, setAttendees] = useState<Attendee[]>([])
  const [cpf, setCpf] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [event, setEvent] = useState<Event>()
  const [name, setName] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [visibleLayer, setVisibleLayer] = useState<number>(Layers.EVENT)

  const id = process.env.REACT_APP_DEFAULT_EVENT
  const { t } = useTranslation()

  const shouldBeVisible = (layer: number): boolean => {
    return layer === visibleLayer
  }

  const handleSelect = (item: Item): void => {
    const nextSelectedItems = composeSelectedItems(selectedItems, item)
    setSelectedItems(nextSelectedItems)
  }

  const handleUpdateAttendee = (attendee: Attendee): void => {
    const offsetAttendees = attendees.filter((prevAttendee) => (
      attendee.uid !== prevAttendee.uid
    ))
    const nextAttendees = [...offsetAttendees, attendee]
    
    console.log({ nextAttendees })
    setAttendees(nextAttendees)
  }

  const handleSubmit = (): void => {
    const eventId = Number(id) 

    PurchasesService.create(
      { name, email, cpf, attendees, eventId, items: selectedItems, phoneNumber },
    ).then((purchase) => {
      window.location.replace(purchase.preference.init_point)
    })
  }

  useEffect(() => {
    EventsService.fetchOne({ id: Number(id) }).then(setEvent)
  }, [id])
  
  const isValidTickets = !!selectedItems.length
  const isValidAttendees = attendees.length === composeTotalAmount(selectedItems)
  const isValidEmail = shouldValidateEmail(email)
  const isValidName = shouldValidateName(name)
  const isValidCpf = shouldValidateCpf(cpf)
  const isValidPhoneNumber = shouldValidatePhoneNumber(phoneNumber)
  const isValidPurchase = shouldValidateFields([isValidEmail, isValidName, isValidCpf])

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
          onContinue={() => setVisibleLayer(Layers.ATTENDEES)}
          isDisabled={!isValidTickets}
        />
      </Layer>

      <Layer
        isVisible={shouldBeVisible(Layers.ATTENDEES)}
        onClose={() => setVisibleLayer(Layers.EVENT)}
      >
        <LayoutContainer>
          <H2>Informações dos participantes</H2>
          
          {
            selectedItems.map((item) => {
              return Array(item.amount).fill('').map((_ticket, key) => {
                return (
                  <FormAttendee
                    onChange={handleUpdateAttendee}
                    ticket={item.ticket}
                    key={key}
                    uid={composeUid(item.ticket.title, key)}
                    index={key + 1}
                  />
                )
              })
            })
          }

          <CartPanel
            items={selectedItems}
            onContinue={() => setVisibleLayer(Layers.PURCHASE)}
            isDisabled={!isValidAttendees}
          />
        </LayoutContainer>
      </Layer>

      <Layer
        isVisible={shouldBeVisible(Layers.PURCHASE)}
        onClose={() => setVisibleLayer(Layers.EVENT)}
      >
        <LayoutContainer>
          <H2>Informações de pagamento</H2>

          <FormControl fullWidth>
            <TextField
              label="Nome completo"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: '8px' }}
              color={(!isValidName && name) ? 'error' : 'primary'}
              helperText={(!isValidName && name) && 'Nome inválido'}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginBottom: '8px ' }}
              color={(!isValidEmail && email) ? 'error' : 'primary'}
              helperText={(!isValidEmail && email) && 'Email inválido'}
            />

            <TextField
              id="outlined-basic"
              label="CPF"
              variant="outlined"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              sx={{ marginBottom: '8px' }}
              color={(!isValidCpf && cpf) ? 'error' : 'primary'}
              helperText={(!isValidCpf && cpf) && 'CPF inválido'}
            />

            <TextField
              id="outlined-basic"
              label="Telefone com DDD"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{ marginBottom: '8px' }}
              color={(!isValidPhoneNumber && phoneNumber) ? 'error' : 'primary'}
              helperText={
                (!isValidPhoneNumber && phoneNumber) && 'Telefone inválido (somente números)'
              }
            />
          </FormControl>
        </LayoutContainer>

        <CartPanel
          items={selectedItems}
          onContinue={handleSubmit}
          isDisabled={!isValidPurchase}
        />
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

const shouldValidateFields = (fields: boolean[]): boolean => fields.every(field => field)

const shouldValidateEmail = (email: string) => validator.isEmail(email)

const shouldValidateName = (name: string) => {
  const hasSurname = name.split(' ').length > 1
  return !validator.isEmpty(name) && hasSurname
}

const shouldValidateCpf = (cpf: string) => CPF.isValid(cpf)

const shouldValidatePhoneNumber = (phoneNumber: string) => {
  const BR_PHONE_NUMBER = /^[0-9]{2}?[0-9]{9}$/
  return  phoneNumber.match(BR_PHONE_NUMBER)
}

const composeUid = (title: string, index: number): string => {
  return `${slugify(title)}-${index}`
}