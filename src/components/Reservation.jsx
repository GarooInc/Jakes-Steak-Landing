"use client"

import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occasion: "",
    preferredFood: "",
    branchName: "",
    numberOfPersons: "",
    phoneNumber: "",
    date: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Reservation submitted:", formData)
  }

  return (
    <section className="bg-[#f2b92b] py-10 md:py-20 px-8" id="reservation">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-3 md:gap-6 mb-7 md:mb-16">
          <div className="w-10 md:w-16 h-px bg-[#1c5234]"></div>
          <h2 className="text-2xl md:text-[48px] text-[#1c5234] whitespace-nowrap fjalla-one-regular">
            RESERVATION
          </h2>
          <div className="w-10 md:w-16 h-px bg-[#1c5234]"></div>
        </div>

        {/* Footer Text */}
        <motion.div
          className="text-center md:hidden block text-[#1c5234] uppercase mb-10 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>
            Jakes New York Steak | Prime Steak House & BBQ
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* First Row */}
          <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-4 md:gap">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-6 py-3 w-[18rem] md:w-full  border  border-[#1c5234] text-[#1c5234] placeholder-[#1c5234] focus:outline-none rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="px-6 py-3  w-[18rem] md:w-full  border  border-[#1c5234] text-[#1c5234] placeholder-[#1c5234] focus:outline-none rounded-md"
            />
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="px-6 py-3 w-[18rem] md:w-full  border  border-[#1c5234] text-[#1c5234] focus:outline-none rounded-md"
            >
              <option value="">Occasion *</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="corporate">Corporate</option>
              <option value="casual">Casual Dining</option>
            </select>
            <select
              name="preferredFood"
              value={formData.preferredFood}
              onChange={handleChange}
              className="px-6 py-3 w-[18rem] md:w-full  border  border-[#1c5234] text-[#1c5234] focus:outline-none rounded-md"
            >
              <option value="">Preferred food *</option>
              <option value="steak">Steak</option>
              <option value="bbq">BBQ</option>
              <option value="seafood">Seafood</option>
              <option value="vegetarian">Vegetarian</option>
            </select>
          </div>

          {/* Second Row */}
          <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-4 md:gap-4">
            <input
              type="text"
              name="branchName"
              placeholder="Branch Name *"
              value={formData.branchName}
              onChange={handleChange}
              required
              className="px-6 py-3 w-[18rem] md:w-full border  border-[#1c5234] text-[#1c5234] placeholder-[#1c5234] focus:outline-none rounded-md"
            />
            <input
              type="number"
              name="numberOfPersons"
              placeholder="Number of Persons"
              value={formData.numberOfPersons}
              onChange={handleChange}
              className="px-6 py-3 w-[18rem] md:w-full  border  border-[#1c5234] text-[#1c5234] placeholder-[#1c5234] focus:outline-none rounded-md"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number *"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="px-6 py-3 w-[18rem] md:w-full  border  border-[#1c5234] text-[#1c5234] placeholder-[#1c5234] focus:outline-none rounded-md"
            />
            <input
              type={formData.date ? "date" : "text"}
              name="date"
              value={formData.date}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!formData.date) e.target.type = "text"
              }}
              onChange={handleChange}
              required
              placeholder="Date"
              className="px-6 py-3 w-[18rem] md:w-full border border-[#1c5234] text-[#1c5234] focus:outline-none rounded-md"
            />

          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-6 py-4 border  border-[#1c5234] placeholder-[#1c5234] text-[#1c5234] focus:outline-none rounded-md resize-none"
          />

          {/* Button */}
          <div className="flex justify-center pt-4">
            <motion.button
              className="text-[#1c5234] text-[13px] border  rounded-md md:rounded-full border-[#1c5234] px-6 py-2 cursor-pointer transition hover:bg-[#1c5234] hover:text-[#f2b92b]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              BOOK YOUR TABLE
            </motion.button>
          </div>
        </motion.form>

        {/* Footer Text */}
        <motion.div
          className="text-center md:block hidden mt-16 text-[#1c5234] uppercase tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Jakes New York Steak | Prime Steak House & BBQ
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Reservation
