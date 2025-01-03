import React, { useEffect, useState } from "react";
import "../App.css";
import "../index.css";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";

const Content = () => {
    const text1 = "HEY I AM";
    const text2 = "Purvish Sharma";
    const text3 = "BUT YOU CAN CALL ME";
    const text4 = "PREM";
    const text = "I am a Frontend Web Developer and also a trainer in the BPO/KPO sector. \nAdditionally, I have experience as a Quality Analyst, \nAuditor, and Research Analyst.";
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0); // Moved index to state for persistence across renders

    useEffect(() => {
        if (index < text.length) {
            const interval = setTimeout(() => {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex(index + 1); // Increment index after updating text
            }, 100);

            return () => clearTimeout(interval);
        }
    }, [index]); // Added index to the dependency array for controlled re-renders

    const lines = displayText.split("\n").map((line, index) => (
        <div key={index}>{line}</div> // Each line is wrapped in a div
      ));
    
    

    return(
        <>
            <div className="absolute top-48 w-full text-center">
                <h1 className="font-Karla font-extrabold text-6xl">
                    <span className="">{text1} </span> <span className="font-kanit underline">{text2}<br/></span>
                    <span className="">{text3} </span> <span className="font-kanit underline">{text4}</span>
                </h1>
                <div className="text-2xl font-bold">
                    {lines}
                    <span className="w-1 bg-slate-900 text-slate-900 animate-pulse">.</span>
                </div>
            </div>
        </>
    );
};


export default Content;