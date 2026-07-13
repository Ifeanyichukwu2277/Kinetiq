"use client"

import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "about", target: "about", offset: -80 },
  { name: "class", target: "class", offset: -80 },
  { name: "team", target: "team", offset: -100 },
  { name: "prices", target: "prices", offset: -80 },
  { name: "testimonial", target: "testimonial", offset: -100 },
  { name: "blog", target: "blog", offset: -100 },
  { name: "BMI", target: "BMI", offset: -100 },
  { name: "contact", target: "contact", offset: -100 },
];

// added onLinkClick prop - this lets the parent (Header) know when a link was clicked
// so it can close the mobile menu
const MobileNav = ({
  containerStyles,
  onLinkClick,
}: {
  containerStyles: string;
  onLinkClick?: () => void;
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            key={index}
            smooth
            spy
            activeClass={`${isMobile && "active"}`}
            className="cursor-pointer hover:text-accent transition-all"
            // when a link is clicked, call the function passed from Header
            // this closes the mobile menu automatically
            onClick={onLinkClick}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;