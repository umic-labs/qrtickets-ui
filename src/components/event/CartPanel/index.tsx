import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Item } from '../../../models'
import { H3 } from '../../shared'
import { composePriceString } from '../../shared/utils'
import { InfoPrice, TotalItems, WrapperCart } from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
interface Props {
  items?: Item[]
  isDisabled?: boolean
  onContinue: (totalPrice: number) => void
}

export const CartPanel: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()

  const totalAmount: number = composeTotalAmount(props.items || [])
  const totalPrice: number = composeTotalPrice(props.items || [])

  return (
    <WrapperCart>
      <InfoPrice>
        <H3>{composePriceString(totalPrice)}</H3>
        <TotalItems>{totalAmount} itens</TotalItems>
      </InfoPrice>

      <div>
        <Button
          onClick={() => props.onContinue(totalPrice)}
          variant="contained"
          disabled={props.isDisabled}
        >
          {t('chart_panel.continue')}
          <ArrowForwardIosIcon sx={{ fontSize: 16, marginLeft: '8px' }} />
        </Button>
      </div>
    </WrapperCart>
  )
}

function composeTotalAmount(items: Item[]): number {
  if (!items.length) return 0
  return items.reduce((acc, item) => (item.amount + acc), 0)
}

function composeTotalPrice(items: Item[]): number {
  if (!items.length) return 0
  return items.reduce((acc, item) => (item.amount * item.ticket.price + acc), 0)
}
