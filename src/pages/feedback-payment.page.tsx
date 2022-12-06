import { Skeleton } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LayoutContainer } from '../components/shared'
import { PurchasesService } from '../services'


const FeedbackPaymentPage: React.FC = (): JSX.Element => {

  const navigate = useNavigate()

  const query = new URLSearchParams(window.location.search)
  const preferenceId = query.get('preference_id')
  const status = query.get('status')

  const params = { status }

  useEffect(() => {
    preferenceId && PurchasesService.feedback({ preferenceId, params })
      .then(_response => {
        navigate(`/purchase/${preferenceId}`)
      })
  }, [preferenceId])

  return (
    <>
      <LayoutContainer>
        <Skeleton variant="text" sx={{ fontSize: '3rem' }} />

        <Skeleton
          variant="rectangular"
          height={200}
          sx={{ marginBottom: '1rem' }}
        />

        <Skeleton variant="text" sx={{ fontSize: '1em' }} />

        <Skeleton
          variant="rectangular"
          height={80}
          sx={{ marginBottom: '1rem' }}
        />

        <Skeleton variant="text" sx={{ fontSize: '1em' }} />
        
        <Skeleton
          variant="rectangular"
          height={80}
          sx={{ marginBottom: '1rem' }}
        />

        <Skeleton variant="text" sx={{ fontSize: '1em' }} />

        <Skeleton
          variant="rectangular"
          height={80}
          sx={{ marginBottom: '1rem' }}
        />
      </LayoutContainer>
    </>
  )
}

export default FeedbackPaymentPage
