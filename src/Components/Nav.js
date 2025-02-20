import React, {useEffect, useRef ,useState} from "react";
import "../App.css";
import "../index.css";
import Switch from "./Darkmode";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import { Cross as Hamburger } from 'hamburger-react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { Link, useLocation } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';


gsap.registerPlugin(useGSAP);

function Navbar(){
  const location = useLocation();
  document.body.style.cursor = 'none'
  const [isToggled, setIsToggled] = useState(false);
  const [NavBarText, setNavBarText] = useState(() => {
    return localStorage.getItem("NavBarText") || "Home";
  });

  useEffect(() => {
    localStorage.setItem("NavBarText", NavBarText);
  }, [NavBarText]);

  useEffect(() => {
    // Jab bhi route change ho, toh NavBarText update karo
    const currentPage = navBarContentMiddle.find(item => item.path === location.pathname);
    if (currentPage) {
      setNavBarText(currentPage.name);
    }
  }, [location.pathname]); // Ye effect tab chalega jab route change hoga

  const [bgColor, setBgColor] = useState("");
  const [TextColor, setTextColor] = useState("");
  const navRef = useRef(null);
  const timeline = gsap.timeline();
  const listItemsRef = useRef([]);
  



  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  
  let navBarContentMiddle = [
    { name: "HOME", path: "/Purvish_Portfolio"},
    { name: "ABOUT", path: "/Purvish_Portfolio/about"},
    // { name: "RESUME", path: "/resume",  },
    { name: "PROJECTS", path: "/Purvish_Portfolio/projects"},
    { name: "LET'S TALK?", path: "/Purvish_Portfolio/LetsTalk"},
  ]


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 50) {
        setBgColor("transparent");
      } else {
        setBgColor("gray-500 bg-opacity-40");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
  
    
    
    if (isToggled) {
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


    return () => window.removeEventListener("scroll", handleScroll);
  }, [isToggled]);


  return(
    <>
    <div className={`bg-${bgColor} bg-opacity-30 transition-all z-50 sticky top-0 flex justify-between items-center px-4 py-4 pl-5`}>
    <li className="text-5xl ml-6 hover:scale-105 transition-all list-none">
          <a className={`text-DarkColor active font-kanit font-bold`} aria-current="page" href="#">{NavBarText}</a>
    </li>
    <div className="flex w-40 justify-between items-center">
      <span className={`bg-DarkColor rounded-full p-0`}>
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
              className="w-40 h-8 bg-DarkColor text-lg list-none m-2 hover:scale-105 transition-all"
            >
              <Link
                className="text-white active font-Karla transition-all"
                to={item.path} onClick={() => setNavBarText(item.name)}
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