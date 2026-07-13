"use client"

import { FaUsers } from "react-icons/fa"
import { IoIosPricetags } from "react-icons/io"
import { FaDumbbell } from "react-icons/fa6"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"
import Achievements from "./Achievements"


const featured = [
  {icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle: 
       `Certified coaches with years of hands-on experience, dedicated to 
        pushing you past plateaus and guiding every step of your journey.`
  },

  {
    icon: <IoIosPricetags />,
    title: "excellent prices",
    subtitle: 
       `Premium training and facilities at rates that respect your budget, 
        with flexible plans built to fit your lifestyle and goals.`
    
  },
  {
    icon: <FaDumbbell />,
    title: "Modern Equipment",
    subtitle: 
       `State-of-the-art machines and free weights, regularly maintained 
        and updated so every session is safe, effective, and efficient.`
    
  }
]


const About = () => {
  return (
    // frame  styling
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">

      {/* container styling */}
    <div className="container mx-auto">

      {/* header styling */}
      <div className="flex flex-col item-center gap-2 mb-8">
        <motion.h2 
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
        className="h2 text-center">

          About Us
          </motion.h2>

        <motion.p 
         variants={fadeIn("up", 0.6)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
        className="mx-auto text-center max-w-150">
          A team of award-winning trainers committed to helping you reach 
          your full potential.
        </motion.p>
      </div>
      
      {/* featured  items */}

       {/* feature container style */}
       {/* grid is for the different device frames */}
      <motion.div 
         variants={fadeIn("up", 0.8)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
       className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
        {featured.map((feature, index) => {
          return(

            // for main content style
            <div key={index} className=" flex flex-col justify-center items-center 
             gap-4 border border-gray-200 p-10">

              {/* icon style */}
             <div className="text-4xl bg-primary-300 text-white
              w-20 h-20 rounded-full flex justify-center items-center">
              {feature.icon}
              </div>

            {/* the paragraph and header container style */}
            <div className="flex flex-col justify-center items-center gap-2 text-center">

              <h4 className="h4 text-accent">
                {feature.title}
              </h4>
              <p>{feature.subtitle}</p>
            </div>
             </div>
          )
        })}
      </motion.div>

      {/* Achievements */}
      <motion.div
      variants={fadeIn("up", 1)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.2}}
      >
         <Achievements />
      </motion.div>
     
    </div>
    </section>
  )
}

export default About