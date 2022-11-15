import React from 'react'
import { useTranslation } from 'react-i18next'
import { H5 } from '../../shared'
import { Item, Ticket } from '../../../models'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import i18n from '../../../config/i18n'

interface Props {
  ticket: Ticket
  onSelect: (item: Item) => void
}

export const TicketItem: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()
  const [amount, setAmount] = useState<number>(0)
  const priceString = composePriceString(props.ticket?.price)

  useEffect(() => {
    const selecteItem: Item = { ticket: props.ticket, amount }
    props.onSelect(selecteItem)
  }, [amount, props])

  return (
    <>
      <div>
        <h3>{props.ticket?.title}</h3>
        <H5>{priceString}</H5>

        <p>{props.ticket?.description}</p>
      </div>

      <div>
        <FormControl>
          <InputLabel id="amount">{t('ticket_item')}</InputLabel>
          <Select
            labelId="amount"
            id="amount"
            value={amount}
            label={t('ticket_item')}
            onChange={(e) => setAmount(Number(e.target.value))}
          >
            {new Array(10).fill(null).map((_value, i) => (
              <MenuItem value={i} key={i}>
                {i}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </>
  )
}

const composePriceString = (price?: number): string => {
  if (!price) return i18n.t('event_info.free')
  return (price / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
