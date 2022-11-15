import React from 'react'
import { useTranslation } from 'react-i18next'
import { Item } from '../../../models'
import { composePriceString } from '../../shared/utils'

interface Props {
  items?: Item[]
  onContinue: () => void
}

export const CartPanel: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()

  const totalAmount: number = composeTotalAmount(props.items || [])
  const totalPrice: number = composeTotalPrice(props.items || [])

  return (
    <div>
      <span>{totalAmount} itens</span>
      <span>{composePriceString(totalPrice)}</span>

      <button onClick={() => props.onContinue}>
        {t('chart_panel.continue')}
      </button>
    </div>
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
