import React from 'react'
import { useTranslation } from 'react-i18next'
import { Ticket } from '../../../models'
import { FooterStyle, PriceStyle } from './styles'

interface Props {
  tickets?: Ticket[]
  onSubmit: () => void
}

export const FooterPanel: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()

  return (
    <FooterStyle>
      <PriceStyle>
        <p>{t('event_info.from_price_subtitle')}</p>

        <h2>R$ 99,90</h2>
      </PriceStyle>

      <button onClick={() => props.onSubmit()}>
        {t('event_info.sign_up_button')}
      </button>
    </FooterStyle>
  )
}
