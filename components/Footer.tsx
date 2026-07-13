"use client"

import Image from "next/image"
import Link from "next/link"

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

import { motion } from "framer-motion"
import CustomButton from "./CustomButton"

// variants
 const footerContainerVariants ={
    hidden: {
      opacity: 0
    },

    show: {
      opacity: 1,
      transition:{
       staggerChildren: 0.6,
       duration: 0.5,
       ease: "linear" as const
      }
    },
};

const footerItem ={
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


const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">

          {/* footer content styling  */}
        <motion.div 
         variants={footerContainerVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}

         className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">

          {/* info */}
          <motion.div 
           variants={footerItem}
           className="flex flex-col gap-4">
           <Link href="#">
            <Image 
            src={"/assets/img/logo1.png"} 
            width={117} 
            height={55} 
            alt="" 
            />
           </Link>
           <p className="max-w-sm">
             A dedicated fitness community helping you train smarter,
             build strength, and reach your goals one workout at a time.
           </p>
           <ul className="flex flex-col gap-4">
             <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-accent" />
              <span> wuse zone 6 Abuja Nigeria</span>
             </li>
             <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-accent" />
              <span>9135735830</span>
             </li>
             <li className="flex items-center gap-4">
              <Link className="flex items-center gap-4" href="#">
              <FaEnvelope className="text-xl text-accent" />
              <span>Sayhello@email.com</span>
              </Link>
             </li>
           </ul>
          </motion.div>

          {/* blog */}
          <motion.div
            variants={footerItem}
          >
            <h4 className="h4 text-accent mb-4">
              Recent blog posts
            </h4>
            <div className="border-b border-dotted border-gray-400 
               flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all"  href="#">
              <h5 className="h5 leading-snug"> 
                How to Stay Motivated for Every Workout
              </h5>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase"> 
                july 6, 2026
              </p>
              </Link>
            </div>

             {/* post  */}
              <motion.div 
               variants={footerItem}
               className="border-b border-dotted border-gray-400 
               flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all"  href="#">
              <h5 className="h5 leading-snug"> 
                Building Muscle: Reps, Sets, and Recovery
              </h5>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase"> 
                june 22, 2026
              </p>
              </Link>
            </motion.div>
            
             {/* post  */}
              <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link className="hover:text-accent transition-all"  href="#">
              <h5 className="h5 leading-snug"> 
                Simple Nutrition Habits That Fuel Real Results
              </h5>
              <p className="text-gray-400 text-[12px] tracking-[3px] uppercase"> 
                june 9, 2026
              </p>
              </Link>
            </div>
          </motion.div>

          {/* gallery */}
          <motion.div
           variants={footerItem}
          >
            <h4 className="h4 text-accent mb-4 text-center"> Gallery</h4>

            {/* gallery img */}
            <div className="flex flex-wrap gap-2">
              <Link 
              href="#"
              >
              <Image 
              src={"/assets/img/testimonial/olivia.jpg"}
              width={100}
              height={100}
              alt=""
              />
              </Link>
              <Link 
              href="#"
              >
              <Image 
              src={"/assets/img/testimonial/Ebube.jpg"}
              width={100}
              height={100}
              alt=""
              />
              </Link>
              <Link 
              href="#"
              >
              <Image 
              src={"/assets/img/testimonial/ikechukwu.jpg"}
              width={100}
              height={100}
              alt=""
              />
              </Link>
              <Link 
              href="#"
              >
              <Image 
              src={"/assets/img/testimonial/Ademola.jpg"}
              width={100}
              height={100}
              alt=""
              />
              </Link>
              <Link 
              href="#"
              >
              <Image 
              src={"/assets/img/testimonial/lucy.png"}
              width={100}
              height={100}
              alt=""
              />
              </Link>
              <Link 
              href="#"
              >
              <Image 
              src={"/assets/img/testimonial/Micheal.jpg"}
              width={100}
              height={100}
              alt=""
              />
              </Link>
            
            </div>
          </motion.div>

          <motion.div
           variants={footerItem}
          >
            <h4 className="h4 text-accent mb-4 text-center ">Newsletter</h4>

            <div className="flex flex-col gap-4">
              <p>
                Sign up to get the latest workout tips, nutrition advice,
                and gym updates delivered straight to your inbox.
              </p>

              <form className="flex items-center">
                <input 
                 type="text"
                 placeholder="Email address" 
                  className="h-12.5 outline-none px-4 text-primary-300 bg-white"
                />
                <CustomButton containerStyles="h-[50px] px-8" text="Send" />
              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>

       {/* copyright */}
       <div className="text-white border-t border-white/20 py-12">
      <div className="container mx-auto h-full">

        {/* Down footer container style  */}
        <div className="flex items-center justify-between h-full">
          <span>
            &copy; Copyright 2026 kinetiq
          </span>

          <ul className="flex gap-4 text-xl">
            <li>
              <Link href="#" className="text-white hover:text-accent transition-all">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-accent transition-all">
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-accent transition-all">
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
       </div>
    </footer>
  )
}

export default Footer