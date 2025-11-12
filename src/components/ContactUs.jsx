"use client"

const ContactUs = () => {
  return (
    <section className="" id="contact"
    >
      <div className="flex items-center justify-center gap-3 md:gap-6 h-60 contact-us "
      >
        <div className="w-10 md:w-16 h-px bg-[#ffff]"></div>
        <h2
          className="text-2xl md:text-[48px] text-white whitespace-nowrap fjalla-one-regular"
        >
          CONTACT US
        </h2>
        <div className="w-10 md:w-16 h-px bg-[#ffff]"></div>
      </div>

      <div className="">
        {/* Right Side - Contact Options */}
        <div className="bg-[#f2b92b] flex  flex-row  items-center justify-center gap-5 px-3 md:px-8 py-10 md:py-16 league-gothic relative">
          
          <div className="flex items-center gap-1 md:gap-4 text-[#1c5234] ">
            <div className="w-10 md:w-[60px] flex justify-center">
              <img src="./images/visit-us.png" className=" w-10 md:w-[77px]" alt="" />
            </div>
            <span className="text-base md:text-[38px] uppercase text-nowrap">Come Visit Us</span>
          </div>

          <div className="flex items-center gap-1 md:gap-4 text-[#1c5234] ">
            <div className="w-[30px] md:w-20 flex justify-center">
              <img src="./images/message.png" className=" w-[60px]" alt="" />
            </div>
            <span className="text-base md:text-[38px] uppercase text-nowrap">Write To Us</span>
          </div>

          <div className="flex items-center gap-1 md:gap-4 text-[#1c5234] ">
            <div className="w-[30px] md:w-[80px] flex justify-center">
              <img src="./images/instagram.png" className="md:w-[50px] " alt="" />
            </div>
            <span className="text-base md:text-[38px] uppercase text-nowrap">Take a Look</span>
          </div>
              {/* <img src="./images/whatsapp.png" className="hidden md:block w-[77px] bottom-14 right-10 absolute" alt="" /> */}
        </div>

      </div>
    </section>
  )
}

export default ContactUs
