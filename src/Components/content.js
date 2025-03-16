import React, { useEffect, useRef, useState, useContext } from "react";
import "../App.css";
import "../index.css";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import "@fontsource/teko";
import Typewriter from 'typewriter-effect/dist/core';
import BelieveEffect from './Believe'
import { WebModeContext } from "./WebModeContext"; // ✅ Import Context


const Content = () => {
    const { webMode, toggleMode } = useContext(WebModeContext); // ✅ Use WebModeContext
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'none';
    localStorage.getItem("WebMode");

    useEffect(() => {
        new Typewriter('#description', {
            strings: ["Front-end Web Developer.", "Trainer at KPO/BPO Company.", "freeLancer also.","full time Quality Analyst.", "Auditor."],
            autoStart: true,
            loop:true,
            cursor: '|',
            deleteSpeed: 10,
            delay: 90,
        });
    });

    return (
        <>
                <div id="typewriter" className={`${webMode === "Light" ? "text-black" : "text-gray-300"} flex flex-col mt-12 lg:mt-24 justify-center items-center text-center`}>
                    <span className="font-Teko font-extrabold text-3xl heyiam lg:text-6xl">HEY I AM <span id="meraname" className="underline">Purvish Sharma</span></span>
                    <span className="font-Teko font-extrabold text-2xl lg:text-6xl">BUT YOU CAN CALL ME <span id="premname" className="underline">Prem</span></span>
                <span className="w-full lg:w-2/3 m-auto text-md font-bold mt-4 lg:text-2xl mb-4">I am a <span id="description" className="font-Karla text-yellow-500 font-bold bg-black"></span></span>
                {/* <IndividualIntervalsExample/> */}
                <BelieveEffect/>
                </div>
        </>
    );
};

export default Content;