import React, { useEffect } from "react";
import "../App.css";
import "../index.css";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import "@fontsource/teko";
import Typewriter from 'typewriter-effect/dist/core';

const Content = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'none';
    localStorage.getItem("WebMode");

    useEffect(() => {
        new Typewriter('#description', {
            strings: ["Front-end Web Developer.", "Trainer at KPO/BPO Company.", "Also a freeLancer.","full time Quality Analyst.", "Auditor."],
            autoStart: true,
            loop:true,
            cursor: '|',
            deleteSpeed: 10,
            delay: 90,
        });
    });

    return (
        <>
                <div id="typewriter" className="flex flex-col mt-12 justify-center items-center text-center">
                    <span className="font-Teko font-extrabold text-6xl heyiam">HEY I AM <span id="meraname" className="underline">Purvish Sharma</span></span>
                    <span className="font-Teko font-extrabold text-6xl">BUT YOU CAN CALL ME <span id="premname" className="underline">Prem</span></span>
                <span className="w-2/3 m-auto text-2xl font-bold mt-4">I am a <span id="description" className="font-Karla text-yellow-500 font-bold bg-black"></span></span>
                </div>
        </>
    );
};

export default Content;