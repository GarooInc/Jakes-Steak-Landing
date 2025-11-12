"use client"

const WhatsApp = () => {
  return (
    <section className="" id="wp">
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
    </section>
  )
}

export default WhatsApp