import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import AboutUS  from '../Pages/AboutUsPage'
import { LandingPage } from '../Pages/LandingPage'
import { SearchResultPage } from '../Pages/SearchResultPage'
function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/results' element={<SearchResultPage />} />
        <Route path='/aboutus'element={<AboutUS/>} />
    </Routes>  )
}
export default MainRoutes