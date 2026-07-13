"use client"

import CountUp from "react-countup"
import {FaBriefcase, FaClock, FaTrophy} from "react-icons/fa"
import { ImUser } from "react-icons/im"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"


const stats =[
    {
        number: 22,
        icon: FaBriefcase,
        text: "training courses"

    },
    {
        number: 968,
        icon: FaClock,
        text: "working hours"

    },
    {
        number: 120,
        icon: ImUser,
        text: "happy customers"

    },
    {
        number: 12,
        icon: FaTrophy,
        text: "international awards"

    }
]

// animation
const statsContainerVariant ={
    hidden: {opacity:0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 0.5,
            ease: "linear" as const
        },
    },
};

const statsItem = {
    hidden: {y: 20, opacity: 0},
    show: {
        y: 0,
        opacity:1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.6, 0.3, 0.8] as const
        }
    }
}


const Achievements = () => {
 const ref = useRef(null);
 const isInView = useInView(ref);
  return (
    <section>
    <motion.div 
     variants={statsContainerVariant}
     initial="hidden"
     whileInView={"show"}
     viewport={{once: false, amount: 0.3}}
     className="container mx-auto">
      <div className="grid gird-cols-2 md:grid-cols-4 gap-16">
        {stats.map((item, index) => {
            return(
                <motion.div
                 variants={statsItem}
                 key={index} className="flex flex-col justify-center items-center">

                    {/* circle outer */}
                  <div className="border border-accent/90 
                   w-35 h-35 mx-auto rounded-full p-1 mb-6">
                    
                    {/* circle inner and count number */}
                    <div ref={ref} className="border border-accent/30 w-full 
                     h-full flex items-center justify-center text-5xl rounded-full">

                        {/* renders the countup animation only the component
                         is in view (isInView set to true)*/}

                        {
                            isInView && (
                            <CountUp start={0} end={item.number} duration={6} />
                        )}
                    </div>
                  </div>
                    
                    {/* text */}
                  <div className="flex flex-col justify-center items-center text-center">
                    <item.icon className="text-3xl mb-2" />
                    <h4 className="h4">{item.text}</h4>
                  </div>
                </motion.div>
            )
        })}
      </div>
    </motion.div>
    </section>
  )
}

export default Achievements