import React, { useEffect } from "react";
import "../App.css";
import "../index.css";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import "@fontsource/teko";
import Typewriter from 'typewriter-effect/dist/core';
import Image from './Image.png';


const Content = () => {
    const text1 = "HEY I AM";
    const text2 = "Purvish Sharma";
    const text3 = "BUT YOU CAN CALL ME";
    const text4 = "PREM";
    const text = "I am a Frontend Web Developer and also a trainer in the BPO/KPO sector. <br/>Additionally, I have experience as a Quality Analyst<br/>, Auditor, and Research Analyst.";
    
    useEffect(() => {
            new Typewriter('#typewriter', {
                strings: [text],
                autoStart: true,
                loop:false,
                cursor: '|',
            }).pasteString(text);
             // Instantly inserts the string without typing animation
            // .start();
    });

    
    

    return(
        <>
            {/* <div className="flex flex-row absolute top-52 right-28 text-center w-full md:w-auto"> */}
            <div className="absolute top-48">
                <img src={Image} className="w-full" alt="No Image"/>
            </div>
            <div className="absolute top-80 w-10/12 -right-24 text-center">
                <h1 className="font-Teko font-extrabold text-6xl">
                    <span className="">{text1} </span>
                    <span id="typewriter2" className="font-Teko underline">{text2}<br/></span>
                    {/* <br/> */}
                    <span className="">{text3} </span>
                    <span id="typewriter3" className="font-Teko underline">{text4}</span>
                </h1>
                <div className="text-2xl text-center font-bold">
                    <span id="typewriter" className=""></span>
                </div>
            {/* </div> */}
            </div>
        </>
    );
};


export default Content;