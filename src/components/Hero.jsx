"use client"
import React from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section min-h-screen flex flex-col items-center justify-center gap-20 relative"
    >
      <motion.img
        src="/images/stella-artios.png"
        alt="Hero Center"
        className="w-50 md:w-64 h-auto object-contain"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <motion.img
        src="/images/Vector-Smart-Object.png"
        alt="Hero Center"
        className="w-48 md:w-64 h-auto object-contain"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <motion.button
        className="text-white text-[13px] border rounded-md md:rounded-full border-[#f2b92b] px-6 py-2 cursor-pointer hover:bg-[#f2b92b] transition"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        DISCOVER MORE
      </motion.button>
    </section>
  )
}

export default Hero
