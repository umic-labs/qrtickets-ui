import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const FeedbackPaymentPage: React.FC = (): JSX.Element => {

  const navigate = useNavigate()

  const query = new URLSearchParams(window.location.search)
  const preferenceId = query.get('preference_id')



  useEffect(() => {
    preferenceId && navigate(`/purchase/${preferenceId}`)
  }, [preferenceId])

  return (
    <>
      {preferenceId}
    </>
  )
}

export default FeedbackPaymentPage
