import React, { useEffect, useRef, useState, useContext } from "react";
import "./BelieveEffect.css"; // Import external CSS file for styling
import { WebModeContext } from "./WebModeContext"; // ✅ Import Context


const BelieveEffect = () => {
      const { webMode, toggleMode } = useContext(WebModeContext); // ✅ Use WebModeContext
  return (
    <div className="flex justify-center items-center mt-3">
      <h2 className="relative text-3xl lg:text-6xl uppercase text-transparent">
        Go Hard
        <span className={`absolute top-0 left-0 ${webMode === "Light" ? "text-black" : "text-gray-300"} transition-transform duration-500 clip-top`}>
        Go Hard
        </span>
        <span className={`absolute top-0 left-0 ${webMode === "Light" ? "text-black" : "text-yellow-500"} transition-transform duration-500 clip-bottom`}>
        Go Hard
        </span>
        <span className={`absolute top-1/2 left-0 transform -translate-y-1/2 scale-y-0 w-[97%] ${webMode === "Light" ? "bg-yellow-400 text-black" : "text-white bg-black"} text-xs lg:text-sm m-0 font-medium tracking-widest text-center pl-0 lg:pl-5 lg:ml-1 transition-transform duration-500 hidden-text`}>
          or go home
        </span>
      </h2>
    </div>
  );
};

export default BelieveEffect;