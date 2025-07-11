import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { GetInvolved } from './pages/GetInvolved' 
import { Events } from './pages/Events'
import { Contact } from './pages/Contact'
import { Donate } from './pages/Donate'
import { Gallery } from './pages/Gallery'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  
    <Footer />
    
    
    </>
  
    
  )
}

export default App
