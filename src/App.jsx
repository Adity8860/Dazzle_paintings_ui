import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThemeProvider from './components/theme-provider'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './Pages/Main'
import Footer from './components/Footer/Footer'
import ContactForm from './components/Contact/ContactForm'
import ScrollToTop from './components/ScrollToTop'
import About from './components/About/About.jsx'
import InteriorPainting from './Pages/InteriorPainting.jsx'
import ExteriorPainting from './Pages/ExteriorPainting.jsx'
import CommercialPainting from './Pages/CommercialPainting'
import ColourConsult from './Pages/ColourConsult'
import StrataPainting from './Pages/StrataPainting'
import CabinatePainting from './Pages/CabinatePainting'
import Staining from './Pages/Staining'
import PowerWashing from './Pages/PowerWashing'
// import NotFound from './Pages/NotFound'
// import WelcomePage from './Pages/WelcomePage'
import { ToastProvider } from './components/ui/ToastContainer';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ToastProvider>
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
            <Route path='/color-consult' element={<ColourConsult/>} />
            <Route path='/strata-painting' element={<StrataPainting/>}/>
            <Route path='/cabinet-painting' element={<CabinatePainting/>}/>
            <Route path='/staining' element={<Staining/>}/>
            <Route path='/power-washing' element={<PowerWashing/>}/>
            {/* <Route path="/ho" element={<Main />} /> */}
            {/* <Route path="/About" element={<ContactForm />} /> */}
            <Route path="/" element={<Main/>} />
            {/* <Route path='/not-found' element={<NotFound/>} /> */}
          </Routes>
          <Footer />
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;