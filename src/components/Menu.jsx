"use client"

import { useState, useEffect, useRef } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
const categories = ["THE PERFECT STEAK","SIDES & SALADS", "APPETIZERS",   "SMOKING SOMER", "(UN) COMFORT FOOD"]

const menuItems = [
  {
    id: 1,
    name: "NEW YORK STRIP",
    description: "Aenean commodo ligula eget dolor ene massa. Cum sociis natoque penatibus et magnis dis.",
    image: "./images/Steak.png",
    category: "THE PERFECT STEAK",
  },
  {
    id: 2,
    name: "CHINESE MULLBERY STEAK SALAD",
    description: "Aenean commodo ligula eget dolor ene massa. Cum sociis natoque penatibus et magnis dis.",
    image: "./images/SideandSalaad.png",
    category: "SIDES & SALADS",
  },
  {
    id: 3,
    name: "JERSEY JAKE'S CHEESESTEAK ROLL",
    description: "Aenean commodo ligula eget dolor ene massa. Cum sociis natoque penatibus et magnis dis.",
    image: "./images/appetizer.png",
    category: "APPETIZERS",
  },
  {
    id: 4,
    name: "JERSEY JAKE'S CHEESESTEAK ROLL",
    description: "Aenean commodo ligula eget dolor ene massa. Cum sociis natoque penatibus et magnis dis.",
    image: "./images/Smoking.png",
    category: "SMOKING SOMER",
  },
  {
    id: 5,
    name: "JERSEY JAKE'S CHEESESTEAK ROLL",
    description: "Aenean commodo ligula eget dolor ene massa. Cum sociis natoque penatibus et magnis dis.",
    image: "./images/Comfort-Food.png",
    category: "(UN) COMFORT FOOD",
  },
]


export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("THE PERFECT STEAK")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
      
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const index = menuItems.findIndex((item) => item.category === activeCategory)
    if (index !== -1) setCurrentIndex(index)
  }, [activeCategory])

  const currentItem = menuItems[currentIndex]

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen h-full flex flex-col items-center   md:justify-center gap-10 px-6 py-10 md:py-20"
      id="menu"
      initial={{ opacity: 0, y: 60 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center gap-3 md:gap-6 mb-0 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-10 md:w-16 h-px bg-white"></div>
        <h2 className="text-2xl md:text-[48px] text-white whitespace-nowrap fjalla-one-regular">OUR MENU</h2>
        <div className="w-10 md:w-16 h-px bg-white"></div>
      </motion.div>

      <div className="flex md:flex-row flex-col items-center justify-between  gap-10">
        <motion.div
          className="flex flex-row flex-wrap justify-center md:flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-2xl font-semibold text-[10px] md:text-[18px] transition-all cursor-pointer whitespace-nowrap ${activeCategory === category ? "bg-[#c69e5a] text-white" : "bg-white text-slate-900"
                }`}
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.4 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="relative flex-1 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="w-[400px] md:w-[871px] h-full md:h-[553px] object-cover rounded-xl"
            />

            <div className="absolute top-50 md:top-1/2 right-6 md:-right-10 md:translate-y-[-50%] bg-white rounded-2xl p-4 md:p-8 w-60 md:w-96 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-md md:text-2xl font-bold text-slate-900 leading-5  md:mb-3">{currentItem.name}</h3>
                  <p className="text-slate-600 text-[12px] md:text-sm leading-4 md:leading-relaxed mt-1 md:mt-0">{currentItem.description}</p>
                </div>
                <div>
                  <img src="./images/stella-artios-circle.png" className="w-20" alt="" />
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 md:mt-6">
                <button className="px-6 py-1 md:py-2 border-2 border-[#c69e5a] rounded-full text-[#c69e5a] text-sm font-semibold hover:bg-yellow-50 transition">
                  🔗
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start md:items-center w-full md:w-[871px] mt-4 md:mt-8">
            <div className="flex gap-1 md:gap-3">
              {menuItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${index === currentIndex ? "bg-[#c69e5a]" : "bg-white"
                    }`}
                />
              ))}
            </div>
            <button className="px-8 py-3 hidden md:block border-2 border-[#c69e5a] text-[#ffffff] font-semibold rounded-full cursor-pointer hover:text-white hover:bg-[#c69e5a] transition uppercase text-sm tracking-wider">
              View All Dishes
            </button>
          </div>
        </motion.div>

      </div>
      <button className="px-6 py-2 mt-40 block md:hidden border-2 border-[#c69e5a] text-[#ffffff] font-semibold rounded-md md:rounded-full cursor-pointer hover:text-white hover:bg-[#c69e5a] transition uppercase text-sm tracking-wider">
        View All Dishes
      </button>
      


    </motion.section>
  )
}
