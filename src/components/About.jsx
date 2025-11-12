"use client"
import React from "react"

const AboutUs = () => {
  return (
    <section className="flex items-center min-h-screen justify-center px-8 py-14 md:py-20 " id="about">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:-12 max-w-6xl w-full">
        <div
          className="flex-1 h-[325px] md:h-[470px]"
        
        >
          <img
            src="./images/FOTOS-BW04.webp"
            alt="Premium grilled steak"
            className="w-[370px] hidden md:block object-cover h-[470px]"
          />
          <img
            src="./images/About-mobile-1.png"
            alt="Premium grilled steak"
            className="w-[370px] block md:hidden object-cover "
          />
        </div>

        <div
          className="flex-1 flex flex-col items-center justify-center gap-8"
          
        >
          <h2
            className="text-4xl md:text-[46.6px] font-bold text-center leading-tight"
            style={{
              fontFamily: "GaramondPremrPro-BdSubh",
              color: "#f2b92b",
              fontStyle: "italic",
            }}
          >
            NOT FANCY.
            <br />
            NOT FAKE.
            <br />
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-white"></div>
              <span style={{ letterSpacing: "0.1em" }}>JUST</span>
              <div className="w-10 h-px bg-white"></div>
            </div>
            <span style={{ fontSize: "0.9em", letterSpacing: "0.05em" }}>
              F*CKING
            </span>
            <br />
            GREAT.
          </h2>

          <button
            className="hidden md:block text-white text-[13px] border rounded-md md:rounded-full border-[#f2b92b] px-14 py-2 cursor-pointer hover:bg-[#f2b92b] transition"
           
          >
            MENU
          </button>
        </div>

        <div
          className="flex-1 h-[325px] md:h-[470px]"
          
        >
          <img
            src="./images/FOTOS-BW02.webp"
            alt="Premium BBQ meat"
             className="w-[370px] hidden md:block object-cover h-[470px]"
          />
          <img
            src="./images/About-mobile-2.png"
            alt="Premium grilled steak"
            className="w-[370px] block md:hidden object-cover "
          />
        </div>

         <button
            className="block md:hidden text-white text-[13px] border rounded-md md:rounded-full border-[#f2b92b] px-14 mt-10 py-2 cursor-pointer hover:bg-[#f2b92b] transition"
            
          >
            MENU
          </button>
      </div>
    </section>
  )
}

export default AboutUs
