"use client"

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButton from "./SwiperNavButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const HeroSlider = () => {
  return (
    <Swiper className="h-full">
      <SwiperSlide>
        {/* the style holding the whole frame*/}
        <div className="h-full flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center mb-2"
            >
              <span className="block">
                <span className="text-accent">Sweat</span> Grind Rise
              </span>
              <span className="block">Stay Strong</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center mb-4"
            >
              Sweat it out let is show the physique of your and
              achieve your dream summer body
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton text="Get Started" containerStyles="w-[196px] h-[62px]" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        {/* the style holding the whole frame*/}
        <div className="h-full flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h1 text-center mb-2"
            >
              <span className="block">
                <span className="text-accent">Train </span> Hard Today
              </span>
              <span className="block">Build Tomorrow</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-white italic text-center mb-4"
            >
              What you put in today becomes the strength you carry tomorrow. 
              No shortcuts, just consistent, honest work.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <CustomButton text="Get Started" containerStyles="w-[196px] h-[62px]" />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      {/* swiper button */}
      <SwiperNavButton
        containerStyles="absolute bottom-10 lg:bottom-8 left-1/2 -translate-x-1/2
     w-full lg:w-[700px] z-50 flex justify-center gap-1"
        btnStyles="border border-accent text-white w-[56px] h-[56px]
      flex justify-center items-center hover:bg-accent transition-all duration-300"
        iconStyles="text-2xl"
      />
    </Swiper>
  )
}

export default HeroSlider