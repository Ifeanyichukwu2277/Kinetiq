"use client"

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"

import { fadeIn } from "@/lib/variants"
import { motion } from "framer-motion"


const trainerData = [
  {
    image: "/assets/img/trainers/matty.jpg",
    name: "matt willson",
    role: "cardio coach",
    description: "12 years of coaching under his belt, Matt built his career helping everyday people fall in love with cardio training. He believes fitness should feel like progress, not punishment, and designs every session around sustainable habits that actually stick long after you leave the gym.",
    bg: "bg-[#1a1a1a]",
     social: [
      {icon: FaFacebook, href: "http://facebook.com"},
      {icon: FaTwitter, href: "http://twitter.com"},
      {icon: FaYoutube, href: "http://youtube.com"}
     ]

  },
  {
    image: "/assets/img/trainers/Roseline.jpg",
    name: "Roseline Micheal",
    role: "cardio coach",
    description: "After a decade in competitive athletics, Roseline brings that same discipline and energy into every session she leads. Her programs blend high-intensity intervals with recovery-focused coaching, helping members build endurance without burning out along the way.",
    bg: "bg-[#2b1f1f]",
     social: [
      {icon: FaFacebook, href: "http://facebook.com"},
      {icon: FaTwitter, href: "http://twitter.com"},
      {icon: FaYoutube, href: "http://youtube.com"}
     ]

  },
  {
    image: "/assets/img/trainers/David.jpg",
    name: "David knowles",
    role: "Body builder coach",
    description: "David has spent 15 years mastering the art of muscle building and loves passing that knowledge on to his clients. From beginners chasing their first pull-up to advanced lifters chasing new personal records, David tailors every program to where you actually are.",
    bg: "bg-[#1a1a1a]",
     social: [
      {icon: FaFacebook, href: "http://facebook.com"},
      {icon: FaTwitter, href: "http://twitter.com"},
      {icon: FaYoutube, href: "http://youtube.com"}
     ]

  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Dion",
    role: "cardio coach",
    description: "Sofia turned her own fitness transformation into a mission to help others rediscover their strength and confidence. She's passionate about creating a judgment-free space where every member, regardless of starting point, feels supported and pushed in equal measure.",
    bg: "bg-[#2b1f1f]",
     social: [
      {icon: FaFacebook, href: "http://facebook.com"},
      {icon: FaTwitter, href: "http://twitter.com"},
      {icon: FaYoutube, href: "http://youtube.com"}
     ]

  },
  {
    image: "/assets/img/trainers/Micheal.jpg",
    name: "Marcus Reid",
    role: "strength coach",
    description: "A former powerlifter, Marcus specializes in building raw strength through smart, sustainable programming. He focuses heavily on form and technique first, making sure every client builds a solid foundation before chasing heavier numbers on the bar.",
    bg: "bg-[#1a1a1a]",
     social: [
      {icon: FaFacebook, href: "http://facebook.com"},
      {icon: FaTwitter, href: "http://twitter.com"},
      {icon: FaYoutube, href: "http://youtube.com"}
     ]

  },
  {
    image: "/assets/img/trainers/Elena.jpg",
    name: "Elena Cruz",
    role: "yoga & mobility coach",
    description: "Elena blends mindful movement with functional training, helping members build strength without losing flexibility. Her sessions combine breathwork, mobility drills, and controlled strength work, leaving clients feeling both stronger and more at ease in their bodies.",
    bg: "bg-[#2b1f1f]",
     social: [
      {icon: FaFacebook, href: "http://facebook.com"},
      {icon: FaTwitter, href: "http://twitter.com"},
      {icon: FaYoutube, href: "http://youtube.com"}
     ]

  }
]
 
const Team = () => {
  return (
    <section className=" bg-[#1c1e26] py-12" id="team">
    <div className="container mx-auto h-full flex flex-col items-center justify-center">

      {/* heading with underline accent, like "COACHES" in the reference */}
      <motion.div
       variants={fadeIn("up", 0.4)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.2}}
       className="flex flex-col items-center mb-12"
      >
        <h2 className="h2 uppercase tracking-[3px] mb-3">Our Trainers</h2>
        <span className="w-16 h-[3px] bg-accent" />
      </motion.div>

    {/* trainers grid - photo left, text right, two per row, alternating card backgrounds */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-12">
      {trainerData.map((trainer, index) => {
        return(
          <motion.div
           variants={fadeIn("up", 0.4)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount: 0.2}}
           className={`flex items-start gap-6 rounded-md p-6 border border-white/10 ${trainer.bg}`}
           key={index}>
           
           {/* image - portrait crop like the reference */}
           <div className="relative w-[180px] h-[220px] flex-shrink-0">
            <Image src={trainer.image} fill className="object-cover" alt={trainer.name} />
           </div>

           {/* text block */}
           <div className="flex flex-col text-left pt-1">
             {/* name */}
             <h4 className="font-bold uppercase tracking-[1px] text-lg mb-1">{trainer.name}</h4>

             {/* role / subtitle */}
             <p className="uppercase tracking-[2px] mb-3 text-xs font-bold text-accent">
               {trainer.role}
             </p>

             {/* description */}
             <p className="mb-5 text-sm text-white/70 leading-relaxed">{trainer.description}</p>

              {/* social */}
             <div className="flex gap-3">
              {trainer.social.map((social, index) => {
                 return (
                  <Link
                   key={index}
                   href={social.href}
                   className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
                  >
                   <social.icon className="text-xs" />
                  </Link>
                 )
              })}
             </div>
           </div>
          </motion.div>
        )
      })}
      </div>

      {/* button */}
      <motion.div
       variants={fadeIn("up", 0.8)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false, amount: 0.2}}
      >
        <CustomButton containerStyles="w-[196px] h-[62px]" text="see all trainers" />
      </motion.div>
    </div>
    </section>
  )
}

export default Team