import React, { useEffect } from "react";
import "../App.css";
import "../index.css";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import "@fontsource/teko";
import Typewriter from 'typewriter-effect/dist/core';
import Platforms from "./Platforms";

const Content = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'none';

    // const text1 = "HEY I AM ";
    // const text2 = "Purvish Sharma";
    // const text3 = "BUT YOU CAN CALL ME ";
    // const text4 = "PREM";
    // const description = "Am a Trainer-Auditor at KPO/BPO Company|| Quality Analyst || Research Analyst || Frontend Web Developer.";

    useEffect(() => {
        new Typewriter('#description', {
            strings: ["Front-end Web Developer.", "Trainer at KPO/BPO Company.", "Also a freeLancer","full time Quality Analyst.", "Auditor."],
            autoStart: true,
            loop:true,
            cursor: '|',
            deleteSpeed: 10,
            delay: 90,
        });
        // new Typewriter('#meraname', {
        //     strings: ["Sharma Purvish"],
        //     autoStart: true,
        //     loop:true,
        //     cursor: '|',
        //     deleteSpeed: 10,
        //     delay: 30,
        // });
        // new Typewriter('#premname', {
        //     strings: ["PREM"],
        //     autoStart: true,
        //     loop:true,
        //     cursor: '|',
        //     deleteSpeed: 10,
        //     delay: 30,
        // });
    });

        // const typewriter = new Typewriter('#typewriter', {
        //     autoStart: true,
        //     loop: false,
        //     cursor: null,
        //     delay: 30, // Typing speed
        // });


    return (
        <>
                <div id="typewriter" className="flex flex-col mt-12 justify-center items-center text-center">
                    <span class="font-Teko font-extrabold text-6xl heyiam">HEY I AM <span id="meraname" class="underline">Purvish Sharma</span></span>
                    <span class="font-Teko font-extrabold text-6xl">BUT YOU CAN CALL ME <span id="premname" class="underline">Prem</span></span>
                <span class="w-2/3 m-auto text-2xl font-bold mt-4">Am a <span id="description" class="font-Karla text-yellow-500 font-bold bg-black"></span></span>
                </div>
        </>
    );
};

export default Content;