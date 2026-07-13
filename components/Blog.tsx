"use client"

//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperNavButton from "./SwiperNavButton";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "apr 8, 2026",
    category: "beginners",
    title: "5 Principles Every Beginner Must Know Before Starting",
    featured: false,
    href: ""
  },
  {
    img: "/assets/img/blog/Nutrition.jpg",
    date: "mar 25, 2026",
    category: "nutrition",
    title: "What to Eat Before and After Training for Maximum Gains",
    featured: false,
    href: ""
  },
  {
    img: "/assets/img/blog/mindset.jpg",
    date: "mar 10, 2026",
    category: "mindset",
    title: "How to Stay Consistent When Motivation Runs Out",
    featured: true,
    href: ""
  },
  {
    img: "/assets/img/blog/Recovery.jpg",
    date: "feb 22, 2026",
    category: "recovery",
    title: "The Real Difference Between Soreness and Injury",
    featured: false,
    href: ""
  },
  {
    img: "/assets/img/blog/Nutrition 2.jpg",
    date: "feb 9, 2026",
    category: "nutrition",
    title: "Why Protein Timing Matters More Than You Think",
    featured: false,
    href: ""
  },
  {
    img: "/assets/img/blog/life.jpg",
    date: "jan 28, 2026",
    category: "lifestyle",
    title: "Building a Routine That Survives a Busy Schedule",
    featured: true,
    href: ""
  },
  {
    img: "/assets/img/blog/strength.jpg",
    date: "jan 14, 2026",
    category: "strength",
    // ✅ REFERENCE IMAGE — all other images are locked to this exact
    // width (320px) and height (220px) so every card is uniform.
    // If you swap this image, keep the same 320×220 crop/ratio.
    title: "Compound Lifts vs Isolation: What to Prioritize",
    featured: false,
    href: ""
  },
  {
    img: "/assets/img/blog/performance.jpg",
    date: "jan 2, 2026",
    category: "performance",
    title: "Hydration Habits That Actually Improve Performance",
    featured: false,
    href: ""
  }
]

const Blog = () => {
  return (
    <section className='bg-[#0a0a0a] text-white py-24' id="blog">
     <div className="container mx-auto">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <motion.div
         variants={fadeIn("up", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount: 0.2}}
        >
          <p className="text-accent uppercase text-xs tracking-[3px] font-bold mb-2">
            Knowledge & Tips
          </p>
          <h2 className="h2">Forge Your Mindset</h2>
        </motion.div>

        <motion.div
         variants={fadeIn("up", 0.4)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false, amount: 0.2}}
         className="mt-6 md:mt-0"
        >
          <CustomButton containerStyles="w-[196px] h-[62px]" text="All Articles" />
        </motion.div>
      </div>

      <motion.div
       variants={fadeIn("up", 0.6)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.2}}
      >
      <Swiper
       slidesPerView={1}
       spaceBetween={30}
       breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        }
       }}
       className="h-115 md:max-w-165 lg:max-w-none mb-8"
      >
        {blogData.map((blog, index) => {
          return(
            <SwiperSlide key={index}>
              <div className={`flex flex-col h-full max-w-[320px] mx-auto rounded-md overflow-hidden
                ${blog.featured ? "bg-accent" : "bg-[#141414] border border-white/10"}`}
              >
                {/* ✅ ALL images locked to 320×220px — same size as the
                    strength.jpg reference. The wrapper div enforces a fixed
                    height so no image can grow or shrink the card.
                    object-cover fills the box and crops neatly on all images. */}
                <div className="w-full h-55 relative overflow-hidden shrink-0">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-col items-start p-5">
                  <span className={`uppercase text-[11px] font-bold tracking-[2px] px-3 py-1 mb-4 rounded-sm
                    ${blog.featured ? "bg-black/30 text-white" : "bg-accent text-white"}`}
                  >
                    {blog.category}
                  </span>

                  <Link className="hover:opacity-80 transition-all duration-300" href={blog.href}>
                   <h5 className="h5 mb-4">{blog.title}</h5>
                  </Link>

                  <div className="flex items-center justify-between w-full">
                    <p className={`text-[11px] uppercase tracking-[2px] ${blog.featured ? "text-white/80" : "text-white/50"}`}>
                      {blog.date}
                    </p>
                    <Link
                     href={blog.href}
                     className={`text-[11px] uppercase tracking-[2px] font-bold hover:underline
                       ${blog.featured ? "text-white" : "text-accent"}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        <SwiperNavButton containerStyles="absolute left-0 right-0
         bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px]
          md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
         btnStyles="bg-accent text-white w-[56px] h-[56px] 
         flex justify-center items-center hover:bg-accent transition-all duration-300"
         iconStyles="text-2xl"
          />
      </Swiper>
      </motion.div>

     </div>
    </section>
  )
}

export default Blog