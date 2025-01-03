import React, {useEffect, useRef ,useState} from "react";
import "../App.css";
import "../index.css";
import Switch from "./Darkmode";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import { Cross as Hamburger } from 'hamburger-react'
import { gsap } from "gsap";




function Navbar(){
  const [isToggled, setIsToggled] = useState(false);
  const navRef = useRef(null);

  let navBarContentMiddle = [
    `HOME`,
    `ABOUT`,
    `RESUME`,
    `PROJECTS`,
    `LET'S TALK?`
]

const handleToggle = () => {
  setIsToggled(prevState => !prevState);
};

useEffect(() => {
  if (isToggled) {
    // Animate the nav items when they are shown
    gsap.fromTo(navRef.current, 
      { y: -50, opacity: 0 }, // Start position and opacity
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.3, 
        ease: "bounce" // Use bounce easing for a bubble effect
      }
    );
  }
}, [isToggled]);



  return(

    <>
    <div className="flex justify-between items-center bg-DarkColor px-4 py-4">
    <li className="text-4xl ml-16 hover:scale-150 transition-all list-none">
          <a className="text-white active font-kanit hover:cursor-none" aria-current="page" href="#">Port-Folio</a>
    </li>
     
     <div className="flex w-40 justify-between items-center">
    <Hamburger color="white" className="mr-4" toggled={isToggled} onToggle={handleToggle} />
    <Switch/>
     </div>
    <div ref={navRef} // Attach the ref to the nav items container
          className={`overflow-hidden absolute top-56 ${isToggled ? 'flex' : 'hidden'} right-4 transition-all text-right flex-col font-bold`}
>
    {navBarContentMiddle.map((item, index) => (
      <li key={index} className="hover:cursor-none text-lg list-none m-2 hover:scale-125 transition-all">
        <a className="text-black active font-Karla hover:cursor-none hover:scale-125 transition-all" aria-current="page" href="#">
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
