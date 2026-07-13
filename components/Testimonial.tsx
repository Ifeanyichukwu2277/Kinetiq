"use client"

import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa6"

 //import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import required module
import { Pagination } from "swiper/modules";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";


// testimonial Data

const testimonialData = [
{
  img: "/assets/img/testimonial/Ademola.jpg",
  message:"Joining this gym was the best decision I made this year. The trainers actually care about your progress, not just getting you through a session.",
  name: "Ademola Anthony"
 },
 {
  img: "/assets/img/testimonial/ikechukwu.jpg",
  message:"I've tried a lot of gyms before but none had this level of energy and community. Six months in and I'm stronger than I've ever been.",
  name: "Ikechukwu Ifeanyi"
 },
 {
  img: "/assets/img/testimonial/Ebube.jpg",
  message:"The coaches pushed me way past what I thought I was capable of, and did it without ever making me feel like I didn't belong here.",
  name: "Ebube Kenneth"
 },

 {
  img: "/assets/img/testimonial/lucy.png",
  message:"What sets this place apart is how personal every workout feels. It never feels like a generic program, it feels built for me.",
  name: "Lucy Anthony"
 },
 {
  img: "/assets/img/testimonial/Micheal.jpg",
  message:"I walked in barely able to finish a warm-up. A year later I'm hitting personal records I never thought possible. Grateful for this team.",
  name: "Micheal Smith"
 },
 {
  img: "/assets/img/testimonial/olivia.jpg",
  message:"Every session leaves me feeling stronger, not just physically but mentally too. This gym genuinely changed how I show up for myself.",
  name: "Olivia Garcia"
 }
]

const Testimonial = () => {
  return (
    <section className="py-12 xl:px-28" id='testimonial'>
    <div className="container mx-auto">
       <motion.h2 
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.2}}
       className="h2 text-center">
        Our Testimonials
       </motion.h2>


       <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.2}}
       >
        <Swiper
         slidesPerView={1} 
         spaceBetween={30}
         modules={[Pagination]}
         pagination={{
          clickable: true
         }}
         breakpoints={{
          768: {
           slidesPerView: 2,
           spaceBetween: 30,
          },

          1024: {
           slidesPerView: 3,
           spaceBetween: 30
          }
         }}
         className="h-80">
          {testimonialData.map((testimonial, index) => {
            return(
              <SwiperSlide className="h-full" key={index}>
                 <div className="flex flex-col justify-center items-center
                  text-center gap-6 h-full">
                  <Image 
                  src={testimonial.img} 
                  alt=""
                  width={70}
                  height={70}
                  className="rounded-full border-2 border-accent w-[70px] h-[70px] object-cover"
                  />

                  <div className="flex flex-col justify-center items-center">
                    <FaQuoteLeft className="text-2xl text-gray-300"/>
                    <p className="max-w-95 mb-4">{testimonial.message}</p>
                    <span className="text-2xl text-accent">{testimonial.name}</span>
                  </div>
                 </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
       </motion.div>
    </div>
    </section>
  )
}

export default Testimonial