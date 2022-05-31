import React from 'react';
import { HomePage, EventPage } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/shared/global-style.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="event/:id" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
