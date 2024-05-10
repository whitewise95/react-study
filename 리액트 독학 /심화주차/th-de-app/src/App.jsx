import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CostomHome from './pages/CostomHome'
import Company from './pages/Company'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CostomHome></CostomHome>} />
        <Route path="/company" element={<Company/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App