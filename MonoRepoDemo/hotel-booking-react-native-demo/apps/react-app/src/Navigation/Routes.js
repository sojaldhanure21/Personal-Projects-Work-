import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from '../Component/LoginPage'
import HomePage from '../Component/HomePage'
function Routess() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/homes' element={<HomePage />} />
      </Routes>
    </Router>
  )
}
export default Routess