const CustomButton = ({text, containerStyles}:{text:string; containerStyles:string;}) => {
  return (

    // button style
    <button
     className={`${containerStyles} group relative cursor-pointer overflow-hidden
      bg-accent uppercase border-2 border-accent
      transition-colors duration-300 hover:bg-transparent
     `}>
    <span className="relative text-white transition-colors duration-300
    group-hover:text-accent tracking-[2px] font-bold text-sm
    ">
    {text}
    </span>
    </button>
  )
}
export default CustomButton