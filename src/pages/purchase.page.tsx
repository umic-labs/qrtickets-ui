import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LayoutContainer, Layer, H2, H6, H5, H3 } from '../components/shared'
import { PurchasesService } from '../services'
import { Purchase } from '../models/purchase'


const PurchasePage: React.FC = (): JSX.Element => {
  const [visibleLayer, setVisibleLayer] = useState<number>(0)
  const [purchase, setPurchase] = useState<Purchase>()

  const { preferenceId } = useParams()

  const shouldBeVisible = (layer: number): boolean => {
    return layer === visibleLayer
  }

  const _handleSubmit = (): void => {
    console.log('TODO: create attendees')
  }

  useEffect(() => {
    preferenceId && PurchasesService.findByPreference(preferenceId)
      .then(setPurchase)
  }, [preferenceId])

  useEffect(() => {
    purchase?.status === 'approved' && setVisibleLayer(Layers.SUCCESS)
  }, [purchase])

  return (
    <>
      <Layer
        isVisible={shouldBeVisible(Layers.SUCCESS)}
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
        isVisible={shouldBeVisible(Layers.ATTENDEES)}
        onClose={() => window.location.replace('/')}
      >
        <LayoutContainer>
          <H2>Dados da compra</H2>

          Id: {purchase?.preferenceId}
          Status: {purchase?.status}
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
