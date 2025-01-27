import React, { useEffect } from "react";
import "../App.css";
import "../index.css";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import "@fontsource/teko";
import Typewriter from 'typewriter-effect/dist/core';
import Image from './Image.png';


const Content = () => {
    document.body.style.overflow = 'hidden';
    const text1 = "HEY I AM";
    const text2 = "Purvish Sharma";
    const text3 = "BUT YOU CAN CALL ME";
    const text4 = "PREM";
    const text = "I am a Frontend Web Developer <br/>A Trainer in the BPO/KPO Company.<br/>Experienced as a Quality Analyst<br/>Auditor, and Research Analyst.";
    
    useEffect(() => {
            new Typewriter('#typewriter', {
                strings: [text],
                autoStart: true,
                loop:false,
                cursor: '|',
                deleteSpeed: 90,
                delay: 100,
            }).pasteString(text);
    });


    return(
        <>
        <div className="absolute flex w-full justify-around align-middle items-start bottom-0">
            <div className="">
                <img src={Image} className="w-full h-full" alt="No Image"/>
            </div>
            <div className="flex flex-col justify-center items-center mt-28 text-center">
                <h1 className="font-Teko font-extrabold text-6xl">
                    <span className="">{text1} </span>
                    <span id="typewriter2" className="font-Teko underline">{text2}<br/></span>
                    {/* <br/> */}
                    <span className="">{text3} </span>
                    <span id="typewriter3" className="font-Teko underline">{text4}</span>
                </h1>
                <div id="" className="w-300px text-2xl font-bold">
                    <span id="typewriter" className=""></span>
                </div>
            </div>
        </div>
        </>
    );
};


export default Content;