import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Banner from './components/Banner'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'

const App = () => {
  return (
    <>
      <div className="hero-wrapper min-h-screen">
        <Header />
        <Hero />
      </div>
      <About />
      <Banner />
      <Menu />
      <Reservation />
      <ContactUs />
      <Footer />
      <WhatsApp/>

    </>
  )
}

export default App
