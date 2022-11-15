import React from 'react'
import { useTranslation } from 'react-i18next'
import { H5 } from '../../shared'
import { Item, Ticket } from '../../../models'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import { composePriceString } from '../../shared/utils'

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
  }, [amount])

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
            {new Array(21).fill(null).map((_value, i) => (
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
