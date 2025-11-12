"use client"
import React, { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const navItems = ["home", "menu", "reservation", "contact"]

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-between items-center px-6 md:px-10 py-6 absolute top-0 z-10"
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#232323] flex flex-col items-center gap-6 py-6 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.li
                key={item}
                className="text-[#f2b92b] uppercase font-normal text-[22px] cursor-pointer hover:text-white"
                onClick={() => handleScroll(item)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop nav */}
      <nav className="hidden md:flex md:static md:bg-transparent md:flex-row md:justify-center md:w-full">
        <ul className="flex flex-row gap-10 text-[#f2b92b] uppercase font-normal text-[27.79px]">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              className="cursor-pointer hover:text-white"
              onClick={() => handleScroll(item)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header
