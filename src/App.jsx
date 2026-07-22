import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './app/Home.jsx'
import About from './app/About.jsx'
import Services from './app/Services.jsx'
import DomesticServices from './app/DomesticServices.jsx'
import DomesticServiceDetail from './app/DomesticServiceDetail.jsx'
import CorporateServices from './app/CorporateServices.jsx'
import Gallery from './app/Gallery.jsx'
import Contact from './app/Contact.jsx'
import FloatingActions from './components/FloatingActions.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-ink">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/domestic" element={<DomesticServices />} />
          <Route path="/services/domestic/:id" element={<DomesticServiceDetail />} />
          <Route path="/services/corporate" element={<CorporateServices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

export default App
