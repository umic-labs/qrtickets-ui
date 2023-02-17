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
        <p>Venda antecipada encerrada</p>

        <p>Compra de ingressos disponível somente no local do evento</p>
      </PriceStyle>
    </FooterStyle>
  )
}
