import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThemeProvider from './components/theme-provider'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './Pages/Main'
import Footer from './components/Footer/Footer'
import ContactForm from './components/Contact/ContactForm'
import ScrollToTop from './components/ScrollToTop'
import About from './components/About/About.jsx'
import InteriorPainting from './components/PaintServices/InteriorPainting/InteriorPainting.jsx'
import ExteriorPainting from './components/PaintServices/ExteriorPainting/ExteriorPainting.jsx'
import CommercialPainting from './components/PaintServices/CommercialPainting/CommercialPainting'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          <Route path='/interior-painting' element={<InteriorPainting />} />
          <Route path="/exterior-painting" element={<ExteriorPainting />} />
          <Route path="/commercial-painting" element={<CommercialPainting />} />
          {/* <Route path="/ho" element={<Main />} /> */}
          {/* <Route path="/About" element={<ContactForm />} /> */}
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App