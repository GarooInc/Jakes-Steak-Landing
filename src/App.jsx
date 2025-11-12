import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Banner from './components/Banner'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

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
      <a
        href="https://wa.me/00000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 animate-float"
      >
        <div className="bg-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300">
          <img
            src="./images/whatsapp.png"
            alt="WhatsApp"
            className="w-10 md:w-14"
          />
        </div>
      </a>

    </>
  )
}

export default App
