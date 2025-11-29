import React, { useEffect, useContext } from "react";
import "../App.css";
import "../index.css";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import "@fontsource/teko";
import Typewriter from 'typewriter-effect/dist/core';
import BelieveEffect from './Believe';
import { WebModeContext } from "./WebModeContext";  

const Content = () => {
    const { webMode } = useContext(WebModeContext);  

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.cursor = 'none';

        const typewriter = new Typewriter('#description', {
            strings: [
                "I am currently working in Promotional Industry as Process Associate at AWS.",
                "I have a superb skills in Front-end Web Development.",
                "I can work as Freelancer in Frontend Development and in Promotional Industry.",
                "I previously worked at Arcgate (a KPO/BPO company) where I served as a Trainer, Quality Analyst, and Auditor.",
            ],
            autoStart: true,
            loop: true,
            cursor: '|',
            deleteSpeed: 10,
            delay: 90,
        });

        return () => typewriter.stop(); // Cleanup on unmount
    }, []);

    return (
        <div id="typewriter" className={`${webMode === "Light" ? "text-black" : "text-gray-300"} flex flex-col mt-12 lg:mt-24 justify-center items-center text-center`}>
            <span className="font-Teko font-extrabold text-3xl lg:text-6xl">
                HEY I AM <span id="meraname" className="underline">Purvish Sharma</span>
            </span>
            <span className="font-Teko font-extrabold text-2xl lg:text-6xl">
                BUT YOU CAN CALL ME <span id="premname" className="underline">Prem</span>
            </span>
            <span className="w-full lg:w-1/3 m-auto text-md font-bold mt-4 lg:text-2xl mb-4">
                <span id="description" className="font-Karla text-black-500 font-bold "></span>
            </span>
            {/* <BelieveEffect /> */}
        </div>
    );
};

export default Content;