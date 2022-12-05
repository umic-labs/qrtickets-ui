import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LayoutContainer, Layer, H2, H6, H5, H3 } from '../components/shared'
import { PurchasesService } from '../services'
import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { Purchase } from '../models/purchase'


const PurchasePage: React.FC = (): JSX.Element => {
  const [visibleLayer, setVisibleLayer] = useState<number>(0)
  const [purchase, setPurchase] = useState<Purchase>()

  const { preferenceId } = useParams()
  const { t } = useTranslation()

  const shouldBeVisible = (layer: number): boolean => {
    return layer === visibleLayer
  }


  const handleSubmit = (): void => {
    console.log('TODO: create attendees')
  }

  useEffect(() => {
    preferenceId && PurchasesService.findByPreference(preferenceId)
      .then(setPurchase)
  }, [preferenceId])

  return (
    <>
      <Layer
        isVisible={shouldBeVisible(Layers.ATTENDEES)}
        onClose={() => window.location.replace('/')}
      >
        <LayoutContainer>
          <H2>Inscrição realizada</H2>

          <H3>
            Sua inscrição foi realizada com sucesso.
          </H3>

          <H6>
            Código do pedido:
          </H6>

          <H5>
            {purchase?.preferenceId}
          </H5>

          <p>
            Em breve você receberá um email com instruções para o preenchimento
            dos nomes dos participantes
          </p>
        </LayoutContainer>
      </Layer>

      <Layer
        isVisible={shouldBeVisible(Layers.SUCCESS)}
        onClose={console.log}
      >
        <LayoutContainer>
          <H2>Inscrição realizada</H2>

          <Button onClick={console.log}>
            Fechar
          </Button>

        </LayoutContainer>
      </Layer>
    </>
  )
}

export default PurchasePage

enum Layers {
  ATTENDEES = 0,
  SUCCESS = 1,
}
