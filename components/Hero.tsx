import Image from "next/image"
import HeroSlider from "./HeroSlider"

const Hero = () => {
  return (
    // the style holding the entire hero section
    <section
      className="relative h-[80vh] lg:h-228 overflow-hidden"
      id="home"
    >
      {/* 
          SPLIT HERO IMAGES — right image flipped horizontally
          so both subjects appear to face each other toward the center
    */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-full w-full">
          <Image
            src="/assets/img/hero/hero-male.jpg"
            alt="Gym hero left"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/assets/img/hero/pexels-alexapopovich-10551482.jpg"
            alt="Gym hero right"
            fill
            priority
            className="object-cover object-center scale-x-[-1]"
          />
        </div>
      </div>

      {/* Dark overlay so the white/accent text stays readable over the photos */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content sits above the images and overlay */}
      <div className="container relative z-10 mx-auto h-full">
        {/* hero slider*/}
        <HeroSlider />
      </div>
    </section>
  )
}

export default Hero