import React from 'react'
import { HomePage, EventPage } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/shared/global-style.scss'
import { Wrapper } from './components/shared'

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="event/:id" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
