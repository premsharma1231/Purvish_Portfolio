import React, {useEffect, useRef ,useState} from "react";
import "../App.css";
import "../index.css";
import Switch from "./Darkmode";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import { Cross as Hamburger } from 'hamburger-react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);




function Navbar(){
  const [isToggled, setIsToggled] = useState(false);
  const navRef = useRef(null); 
  const timeline = gsap.timeline();


  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  
  let navBarContentMiddle = [
    `HOME`,
    `ABOUT`,
    `RESUME`,
    `PROJECTS`,
    `LET'S TALK?`
]


useGSAP(() => {
  if (isToggled) {
    gsap.fromTo(navRef.current, 
      { x: 90, opacity: 1 }, 
      { x: 0, opacity: 1, duration: 0.1, ease: 'bounce',}
    );
  } else {
    gsap.to(navRef.current, 
      { x: 90,
        opacity: 0,
        duration: 0.1,
        ease: "power3.in",
      }
    );
  }
}, [isToggled]); // Runs animation on state change


  return(

    <>
    <div className="flex justify-between items-center bg-DarkColor px-4 py-4">
    <li className="text-4xl ml-16 hover:scale-150 transition-all list-none">
          <a className="text-white active font-kanit" aria-current="page" href="#">Port-Folio</a>
    </li>
    
     <div className="flex w-40 justify-between items-center">
    <Hamburger color="white" className="mr-4" toggled={isToggled} onToggle={handleToggle} />
    <Switch/>
     </div>
    <div ref={navRef} // Attach the ref to the nav items container
          className={`absolute top-36 right-1 transition-all text-center flex-col font-bold z-10`}
>
        {navBarContentMiddle.map((item, index) => (
            <li
              key={index}
              className="w-40 h-8 bg-DarkColor hover:cursor text-lg list-none m-2 hover:scale-105 transition-all"
            >
              <a
                className="text-white active font-Karla transition-all" 
                aria-current="page" 
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
  </div>
    </div>
    </>
)
}


export default Navbar;
