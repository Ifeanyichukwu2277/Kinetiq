"use client"


import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import CustomButton from "./CustomButton";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import required module
import { Pagination } from "swiper/modules";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";


// membership Data

const membershipData = [
  {
    title: "Standard",
    price: "30",
    benefits: [
        {
         icon:FaCheck,
         text:"Full gym membership"
        },
        {
         icon:FaCheck,
         text:"Access to all gym facilities"
        },
        {
         icon:MdClose,
         text:"Personalized diet plan"
        },
        {
         icon:FaCheck,
         text:"Health and fitness tips"
        },
        {
         icon:MdClose,
         text:"Weekday access only (Mon–Fri)"
        },
        {
         icon:MdClose,
         text:"Access to premium equipment"
        },
        {
         icon:MdClose,
         text:"Personal trainer sessions"
        }
    ]
},
{
    title: "Ultimate",
    price: "45",
    benefits: [
        {
         icon:FaCheck,
         text:"Full gym membership"
        },
        {
         icon:FaCheck,
         text:"Access to all gym facilities"
        },
        {
         icon:FaCheck,
         text:"Personalized diet plan"
        },
        {
         icon:FaCheck,
         text:"Health and fitness tips"
        },
        {
         icon:FaCheck,
         text:"7-day gym access"
        },
        {
         icon:FaCheck,
         text:"Access to premium equipment"
        },
        {
         icon:MdClose,
         text:"Personal trainer sessions"
        }
    ]
},
{
    title: "Professional",
    price: "65",
    benefits: [
        {
         icon:FaCheck,
         text:"Full gym membership"
        },
        {
         icon:FaCheck,
         text:"Access to all gym facilities"
        },
        {
         icon:FaCheck,
         text:"Personalized diet plan"
        },
        {
         icon:FaCheck,
         text:"Health and fitness tips"
        },
        {
         icon:FaCheck,
         text:"7-day gym access"
        },
        {
         icon:FaCheck,
         text:"Access to premium equipment"
        },
        {
         icon:FaCheck,
         text:"1-on-1 personal trainer sessions"
        }
    ]
}
]


const MembershipSlider = () => {
  return (
    <Swiper slidesPerView={1} modules={[Pagination]} pagination={{clickable: true,}}
      breakpoints={{
        768:{
            slidesPerView:2,
            spaceBetween: 30,
        },
        1024:{
            slidesPerView:3,
            spaceBetween: 30,
        }
      }}
       className="min-h-150"
      
    >
        {membershipData.map((membership, index) => {
            return(
                <SwiperSlide key={index}>
                   <div className="border border-accent hover:bg-primary-300/80 
                    transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto
                   ">
                    <div className="py-5 px-6 border-b border-accent">
                    <h4 className="h4">{membership.title}</h4>
                    </div>

                    {/* benefits */}
                    <div className="py-7.5 px-6 ">
                        <ul className="flex flex-col gap-5 mb-7">
                            {membership.benefits.map((membership, index) => {
                                return(
                                <li key={index} className="flex items-center gap-2">
                                  <membership.icon className="text-accent text-lg" />
                                  {membership.text}
                                </li>
                                )
                            })}
                        </ul>
                        
                        {/* price and button */}
                        <p className="text-accent mb-8 flex gap-1 items-center">
                         <sup className="text-4xl">$</sup>
                         <strong className="text-6xl" >{membership.price}</strong>
                         <em className="self-end text-2xl">/month</em>
                        </p>
                        <CustomButton containerStyles="w-[196px] h-[62px]" text="Buy now" />
                    </div>
                   </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default MembershipSlider