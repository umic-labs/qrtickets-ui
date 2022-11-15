import React from 'react'
import { useTranslation } from 'react-i18next'
import { Item } from '../../../models'
import { FooterStyle, PriceStyle } from './styles'

interface Props {
  items?: Item[]
  onContinue: () => void
}

export const CartPanel: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div>
      <span>R$ 480,00</span>

      <button onClick={() => props.onContinue}>
        {t('chart_panel.continue')}
      </button>
    </div>
  )
}
