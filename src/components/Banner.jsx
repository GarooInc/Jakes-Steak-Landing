"use client"
import React from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <section
      className="flex flex-col items-center  justify-center px-10 py-10 md:py-20 bg-center bg-cover h-[80vh] md:h-full"
      id="banner"
    >
      <div
        className="text-center"
      >
        <p
          className="text-[#1c5234] max-w-4xl text-2xl font-medium md:text-[83px]"
        >
          WE DIDN'T JUST OPEN <br /> A STEAK HOUSE
        </p>
        <p
          className="text-[#1c5234] text-2xl  md:text-[83px] mb-12"
        >
          WE OPENED THE HOUSE
          <br />
          OF THE PERFECT STEAK.
        </p>
        <button
          className="text-white mt-60 md:mt-0 text-[13px] border rounded-md md:rounded-full border-[#f2b92b] px-6 py-2 cursor-pointer hover:bg-[#f2b92b] transition"
        >
          RESERVATIONS
        </button>
      </div>
    </section>
  )
}

export default Banner
