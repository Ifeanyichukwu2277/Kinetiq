"use client"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"

const brandData =[
  {
    img: "/assets/img/brands/gmyshark (2).png",
    href: ""
  },
  {
    img: "/assets/img/brands/optimum1.png",
    href: ""
  },
  {
    img: "/assets/img/brands/Reebok.png",
    href: ""
  },
  {
    img: "/assets/img/brands/Nike (2).png",
    href: ""
  },
  {
    img: "/assets/img/brands/Gold_Gym-.png",
    href: ""
  }
]

// variants

const brandContainerVariant ={
    hidden: {
      opacity: 0
    },

    show: {
      opacity: 1,
      transition:{
       staggerChildren: 0.4,
       duration: 0.5,
       ease: "linear" as const
      }
    },
};

const brandItem ={
    hidden: {
      y: 20, 
      opacity: 0,
    },

    show: {
      opacity: 1,
      transition:{
       duration: 0.5,
       ease: [0.25, 0.6, 0.3, 0.8] as const
      }
    },
}


const Brands = () => {
  return (
    <section className="py-8" id="contact">
     <div className="container mx-auto">
       <motion.h2
        variants={fadeIn("up", 0.4)} 
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
       className="text-accent text-center mb-8 h2">
        Brands
       </motion.h2>

       <motion.div 
        variants={brandContainerVariant}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className="grid grid-cols-2 lg:grid-cols-5 py-8">
        {brandData.map((brand, index) => {

          return(
            <motion.div 
            variants={brandItem}
            key={index}>
            <Link className="group" href={brand.href} >
              <Image 
              src={brand.img} 
              alt="" 
              width={204} 
              height={106}
              className="opacity-50 group-hover:opacity-100 transition-all  h-30  w-50 flex  "
              />
            </Link>
            </motion.div>
          )
        })}
       </motion.div>
     </div>
    </section>
  )
}

export default Brands