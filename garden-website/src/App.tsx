import { useEffect } from 'react'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { GetInvolved } from './pages/GetInvolved' 
import { Events } from './pages/Events'
import { Contact } from './pages/Contact'
import { Donate } from './pages/Donate'
import { Gallery } from './pages/Gallery'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
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
