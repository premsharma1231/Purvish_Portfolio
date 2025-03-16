import React, { useEffect, useRef, useState, useContext } from "react";
import "../App.css";
import "../index.css";
import CustomizedSwitches from "./Darkmode";
import "@fontsource/rubik-vinyl";
import "@fontsource/karla";
import { Cross as Hamburger } from "hamburger-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useLocation } from "react-router-dom";
import { WebModeContext } from "./WebModeContext";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const { webMode, toggleMode } = useContext(WebModeContext);
  const location = useLocation();
  
  document.body.style.cursor = "none";
  document.body.style.overflowX = "hidden";

  const [isToggled, setIsToggled] = useState(false);
  const [navBarText, setNavBarText] = useState(() => localStorage.getItem("NavBarText") || "Home");
  const [bgColor, setBgColor] = useState("bg-transparent");

  const listItemsRef = useRef([]);

  const navBarContentMiddle = [
    { name: "HOME", path: "/Purvish_Portfolio" },
    { name: "ABOUT", path: "/Purvish_Portfolio/about" },
    { name: "PROJECTS", path: "/Purvish_Portfolio/projects" },
    { name: "LET'S TALK?", path: "/Purvish_Portfolio/LetsTalk" },
  ];

  useEffect(() => {
    localStorage.setItem("NavBarText", navBarText);
  }, [navBarText]);

  useEffect(() => {
    const currentPage = navBarContentMiddle.find((item) => item.path === location.pathname);
    if (currentPage) {
      setNavBarText(currentPage.name);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setBgColor(window.scrollY < 50 ? "bg-transparent" : "bg-gray-900 bg-opacity-40");
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!listItemsRef.current.length) return;
    
    gsap.to(listItemsRef.current, {
      x: isToggled ? 0 : 10,
      opacity: isToggled ? 1 : 0,
      visibility: isToggled ? "visible" : "hidden",
      duration: 0.3,
      ease: isToggled ? "bounce.out" : "power3.in",
      stagger: 0.05,
    });
  }, [isToggled]);

  return (
    <div className={`${bgColor} bg-opacity-30 transition-all z-50 sticky top-0 flex justify-between items-center pl-4 py-4 lg:px-4 lg:pl-5`}>
      <li className="text-2xl ml-2 hover:scale-105 transition-all list-none sm:text-3xl sm:ml-4 md:text-4xl md:ml-5 lg:text-5xl lg:ml-6">
        <Link className={`${webMode === "Light" ? "text-DarkColor" : "text-gray-300"} active font-kanit font-bold`} to="/Purvish_Portfolio">
          {navBarText}
        </Link>
      </li>
      
      <div className="flex justify-between items-center">
        <span className="mx-2 lg:bg-white rounded-full p-0">
          <Hamburger color="black" size={30} toggled={isToggled} onToggle={setIsToggled} />
        </span>
        <CustomizedSwitches />
      </div>
      
      <div className="absolute top-28 right-1 transition-all text-center flex-col font-bold z-10">
        {navBarContentMiddle.map((item, index) => (
          <li
            key={index}
            ref={(el) => (listItemsRef.current[index] = el)}
            className={`w-28 text-sm p-1 lg:p-0 lg:text-lg lg:w-40 h-8 ${webMode === "Light" ? "bg-gray-800" : "bg-white"} list-none m-2 hover:scale-105 transition-all`}
          >
            <Link className={`${webMode === "Light" ? "text-white" : "text-black"} font-Karla transition-all`} to={item.path} onClick={() => setNavBarText(item.name)}>
              {item.name}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Navbar;