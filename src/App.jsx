import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DynamicForm } from './pages/DynamicForm.jsx'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DynamicForm />} />
      </Routes>
    </BrowserRouter>
  )
}
