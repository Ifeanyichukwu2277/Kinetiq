"use client";

import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md";


const Header = () => {
const [headerActive, setHeaderActive] = useState(false)
const [openMenu, setOpenMenu] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    //detect scroll
    setHeaderActive(window.scrollY > 50)
  }
  // add event scroll
 window.addEventListener("scroll", handleScroll)

 //remove scroll event
 return () => {
  window.removeEventListener("scroll", handleScroll)
 }
}, [])


  return (
    <header className={`${headerActive ? "h-25" : "h-31"} 
    fixed max-w-[1920px] top-0  w-full bg-primary-200 h-25 transition-all z-50`}> 
     {/*the style holding every background frame*/}
    
    {/* the second style is the style holding the section */}
      <div className="container mx-auto h-full flex items-center justify-between">

         {/* logo */}
          <Link href="">
          <Image 
            src={"/assets/img/logo1.png"} 
             alt=""
             width={117}
             height={55}
            />
          </Link>
           

        {/* mobile nav - hidden on large device */}
         <MobileNav containerStyles={` ${headerActive ? "top-[90px]" : "top-[124px]"} 
         ${openMenu ? "max-h-max pt-8 pb-10 border-t border-white/10 " 
          : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0 "}
         xl:hidden text-white flex
          flex-col text-center gap-8 fixed bg-primary-200 w-full left-0
          text-base uppercase font-medium transition-all
         `}/>

         {/* desktop nav - hidden on small device*/}
      <Nav containerStyles=" py-12 flex gap-4 text-white hidden xl:flex
       text-base transition-all uppercase font-medium
      " />

      {/* hidden or open menu button*/}
      <div className="flex items-center gap-4">

      {/* login/register button*/}
      <div className="text-white flex items-center gap-4">
        <button className="hover:text-accent transition-all text-base uppercase
        font-medium">Login</button>
        <button className="hover:text-accent transition-all text-base uppercase
        font-medium">Register</button>
      </div>

       <button onClick={() => setOpenMenu(!openMenu)} className="text-white xl:hidden">
        <MdMenu className="text-4xl cursor-pointer" />
       </button>
      </div>
    
      </div>
    </header>
  )
}

export default Header