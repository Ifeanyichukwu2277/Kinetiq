"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"
import CustomButton from "./CustomButton"


const classes = [
 {
    name: "Weight lifting",
    img:  "/assets/img/classes/weight-lifting.jpg",
    description: 
       `Build raw power and lean muscle with progressive lifts designed 
        to challenge every major muscle group and boost your strength.`
  },
  {
    name: "Cardio strength",
    img:  "/assets/img/classes/Cardio-strength.jpg",
    description: 
       `High-intensity intervals that torch calories while building 
        endurance, keeping your heart strong and your energy limitless.`
  },
  {
    name: "fitness",
    img:  "/assets/img/classes/fitness.jpg",
    description: 
       `A full-body approach combining strength, mobility, and stamina 
        to help you move better and feel stronger every single day.`
  },
  {
    name: "Crossfit",
    img:  "/assets/img/classes/Crossfit-2.jpg",
    description: 
       `Constantly varied, high-intensity functional movements that push 
        your limits and build a body ready for anything.`
  },
  {
    name: "Pilates",
    img:  "/assets/img/classes/pilate.jpg",
    description: 
       `Low-impact, core-focused training that improves posture, flexibility, 
        and balance while sculpting long, lean muscle.`
  },
  {
    name: "Yoga",
    img:  "/assets/img/classes/yoga2.jpg",
    description: 
       `Reconnect body and mind through mindful movement, deep stretching, 
        and breathwork that leaves you calm, centered, and strong.`
  }
]


const Classes = () => {
  return (
    <section  id="class">
      <motion.div
       variants={fadeIn("up", 0.6)} 
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.2}}
      className="grid grid-cols-1 lg:grid-cols-2 ">
        {classes.map((item, index) => {
          return(
            <div className="relative w-full h-75 lg:h-121.25
             flex flex-col justify-center items-center" 
            key={index}>

              {/* overlay */}
              <div className="bg-black-50 absolute w-full h-full top-0 z-10"></div>
             <Image src={item.img} fill className="object-cover" alt="classes" />

             {/* text and btn */}
             <div className="z-30 max-w-95 text-center flex flex-col items-center justify-center gap-4">
              <motion.h3 
                  variants={fadeIn("up", 0.6)} 
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.2}}
               className="h3 text-accent">{item.name}</motion.h3>
               
              <motion.p 
                  variants={fadeIn("up", 0.6)} 
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.2}}
               className="text-white">{item.description}</motion.p>

              <motion.div
                  variants={fadeIn("up", 0.6)} 
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: false, amount: 0.2}}
              >
                <CustomButton containerStyles="w-[164px] h-[46px]" text=" Read More" />
              </motion.div>
             </div>
            </div>
          )
        })}
      </motion.div>
      </section>
  )
}

export default Classes