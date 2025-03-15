  import React, { useEffect, useRef, useState } from "react";
  import "../App.css";
  import "../index.css";
  import Switch from "./Darkmode";
  import "@fontsource/rubik-vinyl"; 
  import "@fontsource/karla";
  import { Cross as Hamburger } from "hamburger-react";
  import { gsap } from "gsap";
  import { useGSAP } from "@gsap/react";
  import { Link, useLocation } from "react-router-dom";

  gsap.registerPlugin(useGSAP);

  function Navbar() {
    const location = useLocation();
    document.body.style.cursor = "none";
    document.body.style.overflowX = "hidden";

    // ✅ `WebMode` ka default value `localStorage` se lena chahiye
    const [WebMode, setWebMode] = useState(() => localStorage.getItem("WebMode") || "Light");
    const [isToggled, setIsToggled] = useState(false);
    const [NavBarText, setNavBarText] = useState(() => localStorage.getItem("NavBarText") || "Home");
    const [bgColor, setBgColor] = useState("");
    const navRef = useRef(null);
    const listItemsRef = useRef([]);

    useEffect(() => {
      localStorage.setItem("NavBarText", NavBarText);
    }, [NavBarText]);

    useEffect(() => {
      const currentPage = navBarContentMiddle.find((item) => item.path === location.pathname);
      if (currentPage) {
        setNavBarText(currentPage.name);
      }
    }, [location.pathname]);

    const handleToggle = () => {
      setIsToggled((prevState) => !prevState);
    };

    
    const navBarContentMiddle = [
      { name: "HOME", path: "/Purvish_Portfolio" },
      { name: "ABOUT", path: "/Purvish_Portfolio/about" },
      { name: "PROJECTS", path: "/Purvish_Portfolio/projects" },
      { name: "LET'S TALK?", path: "/Purvish_Portfolio/LetsTalk" },
    ];

    
    const toggleMode = () => {
      console.log("Toggle button clicked!"); // 👈 Debugging ke liye
      setWebMode((prevMode) => {
        const newMode = prevMode === "Light" ? "Dark" : "Light";
        localStorage.setItem("WebMode", newMode);
        console.log("Mode Changed To:", newMode); // Yeh print hoga
        return newMode;
      });
    };
    
    useEffect(() => {
      console.log("Updated WebMode:", WebMode); // Yeh tab chalega jab WebMode update hoga
    }, [WebMode]);
    

    useEffect(() => {
      const handleScroll = () => {
        setBgColor(window.scrollY < 50 ? "bg-transparent" : "bg-gray-900 bg-opacity-40");
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);  

      // ✅ GSAP Animations Fix
      useEffect(() => {
        if (!listItemsRef.current.length) return;
      
        if (isToggled) {
          gsap.fromTo(
            listItemsRef.current,
            { x: 10, opacity: 0, visibility: "hidden", scale: 1 },
            { x: 0, opacity: 1, visibility: "visible", scale: 1, duration: 0.3, ease: "bounce.out", stagger: 0.05 }
          );
        } else {
          gsap.to(listItemsRef.current, { x: 10, opacity: 0, visibility: "hidden", scale: 1, duration: 0.3, ease: "power3.in", stagger: 0.05 });
        }
      }, [isToggled]);


    return (
      <>
        <div className={`${bgColor} bg-opacity-30 transition-all z-50 sticky top-0 flex justify-between items-center pl-2 py-4 lg:px-4 lg:pl-5`}>
          <li className="text-2xl ml-2 hover:scale-105 transition-all list-none
          sm:text-3xl sm:ml-4
          md:text-4xl md:ml-5
          lg:text-5xl lg:ml-6
          ">
            <Link className="text-DarkColor active font-kanit font-bold" aria-current="page" to="/Purvish_Portfolio">
              {NavBarText}
            </Link>
          </li> 
          <div className="flex justify-between items-center">
            <span className="mx-2 lg:bg-white rounded-full p-0">
              <Hamburger color="black" size={30} className="p-0 text-sm" toggled={isToggled} onToggle={handleToggle} />
            </span>
            <Switch onClick={toggleMode} className=""/>
          </div>
          <div ref={navRef} className={`absolute top-28 right-1 transition-all text-center flex-col font-bold z-10`}>
            {navBarContentMiddle.map((item, index) => (
              <li
                key={index}
                ref={(el) => (listItemsRef.current[index] = el)}
                className={`w-28 text-sm p-1 lg:p-0 lg:text-lg lg:w-40 h-8  ${WebMode === "Light" ? "bg-gray-800" : "bg-white"} list-none m-2 hover:scale-105 transition-all`}
              >
                <Link className="text-white active font-Karla transition-all" to={item.path} onClick={() => setNavBarText(item.name)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </>
    );
  }

  export default Navbar;