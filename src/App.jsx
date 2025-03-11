import React from 'react'
import ThemeProvider from './components/theme-provider'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './Pages/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Main/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App