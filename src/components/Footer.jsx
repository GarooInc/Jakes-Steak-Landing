"use client"

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold uppercase mb-6 relative inline-block after:content-[''] after:block after:w-16 after:h-[2px] after:bg-[#f2b92b] after:mt-2">
              Our Location
            </h3>
            <p className="text-[#7a7a7a] text-sm leading-relaxed">
              8va Avenida 16-70, Centro Comercial La Estación, Zona 10,{" "}
              <span className="text-white">Ciudad de Guatemala</span>
            </p>
            <div className="space-y-1">
              <p className="text-[#7a7a7a] text-sm">
                Call for Reservations:{" "}
                <span className="text-white">502 2305 7979</span>
              </p>
              <a href="mailto:info@jakesnysteak.com" className="text-[#7a7a7a] text-sm">
                E-mail: <span className="text-white">info@jakesnysteak.com</span>
              </a>
            </div>
          </div>

          {/* Opening Times */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold uppercase mb-6 relative inline-block after:content-[''] after:block after:w-16 after:h-[2px] after:bg-[#f2b92b] after:mt-2">
              Opening Times
            </h3>

            <div className="divide-y divide-[#2a2a2a] border border-[#2a2a2a] rounded-md overflow-hidden">
              {[
                ["Monday", "11:30 AM - 9 PM"],
                ["Tuesday", "11:30 AM - 10 PM"],
                ["Wednesday", "11:30 AM - 10 PM"],
                ["Thursday", "11:30 AM - 10 PM"],
                ["Friday", "11:30 AM - 10 PM"],
                ["Saturday", "11:30 AM - 10 PM"],
                ["Sunday", "11:30 AM - 8 PM"],
              ].map(([day, time], index) => (
                <div
                  key={index}
                  className="flex justify-between px-4 py-2 hover:bg-[#1f1f1f] transition-colors duration-300"
                >
                  <span className="text-[#7a7a7a]">{day}</span>
                  <span className="text-white">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a2a] mt-12 pt-6 text-center text-sm text-[#7a7a7a]">
          © {new Date().getFullYear()} Jake’s Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
