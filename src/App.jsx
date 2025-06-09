import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeIndexPage from './pages/landingPage'
import AboutIndexPage from './pages/aboutPage'
import ContactIndexPage from './pages/contactPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomeIndexPage />}/>
      <Route path='/about' element={ <AboutIndexPage />}/>
      <Route path='/contact' element={ <ContactIndexPage />}/>
    </Routes>
  )
}

export default App