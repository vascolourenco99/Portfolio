// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/about'

export default function routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  )
}
