import React, {useEffect, useRef ,useState} from "react";
import "../App.css";
import "../index.css";
import Switch from "./Darkmode";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import { Cross as Hamburger } from 'hamburger-react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { Link } from "react-router-dom";


gsap.registerPlugin(useGSAP);




function Navbar(){
  const [isToggled, setIsToggled] = useState(false);
  const navRef = useRef(null);
  const timeline = gsap.timeline();
  const listItemsRef = useRef([]);



  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  
  let navBarContentMiddle = [
    { name: "HOME", path: "/home" },
    { name: "ABOUT", path: "/about" },
    // { name: "RESUME", path: "/resume" },
    { name: "PROJECTS", path: "/projects" },
    { name: "LET'S TALK?", path: "/LetsTalk" },
  ]


  useEffect(() => {
    if (isToggled) {
      // Stagger animation for items
      gsap.fromTo(
        listItemsRef.current,
        { x: 50, opacity: 0, scale: 1 }, // Starting position
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.1,
          ease: "bounce.out",
          stagger: 0.05, // Delay between each item animation
        }
      );
    } else {
      // Reverse animation for hiding items
      gsap.to(listItemsRef.current, {
        x: 50,
        opacity: 0,
        scale: 1,
        duration: 0.1,
        ease: "power3.in",
        stagger: 0.05, // Reverse stagger
      });
    }
  }, [isToggled]);


  return(

    <>
    <div className="flex justify-between items-center px-4 py-4 ml-5">
    <li className="text-5xl ml-6 hover:scale-105 transition-all list-none">
          <a className="text-DarkColor active font-kanit font-bold" aria-current="page" href="#">HOME</a>
    </li>
    
    <div className="flex w-40 justify-between items-center">
      <span className="bg-DarkColor rounded-full p-0">
        <Hamburger color="white" className='p-0' toggled={isToggled} onToggle={handleToggle} />
      </span>
    <Switch/>
     </div>
    <div ref={navRef} // Attach the ref to the nav items container
          className={`absolute top-28 right-1 transition-all text-center flex-col font-bold z-10`}
>
{navBarContentMiddle.map((item, index) => (
            <li
              key={index}
              ref={(el) => (listItemsRef.current[index] = el)} 
              className="w-40 h-8 bg-DarkColor text-lg list-none m-2 hover:scale-105 hover:cursor transition-all"
            >
              <Link
                className="text-white active font-Karla transition-all"
                to={item.path}
              >
                {item.name}
              </Link>
            </li>
          ))}
  </div>
    </div>
    </>
)
}


export default Navbar;
