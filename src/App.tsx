import React from 'react'
import { EventPage, PurchasePage, FeedbackPaymentPage } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/shared/global-style.scss'
import { Wrapper } from './components/shared'

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<EventPage />} />
          <Route path="purchase/:preferenceId" element={<PurchasePage />} />
          <Route path="feedback-payment" element={<FeedbackPaymentPage />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
