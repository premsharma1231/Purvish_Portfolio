import React, { useEffect, useRef, useState, useContext } from "react";
import Button from "../Button";
import { faBootstrap, faCss, faFigma, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Education from './Education';
import Github from "./Githubcalendar";
import FooterForAll from "../FooterForAll";
import { WebModeContext } from "../WebModeContext"; // ✅ Import Context
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "HTML", level: 99 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "React JS", level: 95 },
  { name: "Bootstrap 5", level: 95 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Figma", level: 80 },
  { name: "Advanced Excel", level: 95 },
  { name: "C", level: 50 },
  { name: "C++", level: 50 },
  { name: "Salesforce", level: 60 },
  { name: "Tally", level: 100 },
  { name: "SAGE (CRM)", level: 100 },
  { name: "PROMO (CRM)", level: 100 },
  { name: "ESSENT (CRM)", level: 90 },
];

const SkillsSection = ({ webMode }) => (
  <div className="w-[1200px] max-w-[1600px] rounded-2xl p-10">
    <h1
      className={`text-4xl lg:text-5xl font-bold tracking-wide text-center mb-16 ${
        webMode === "Light" ? "text-gray-900" : "text-white"
      }`}
    >
      Skills & Proficiency
    </h1>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-14 mt-16 font-Teko justify-items-center">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex flex-col items-center space-y-4 transition-all duration-500 ${
            index % 2 === 0 ? "translate-y-4" : "-translate-y-4"
          }`}
        >
          <div className="relative w-44 h-44 lg:w-48 lg:h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              {/* Background */}
              <circle
                cx="60"
                cy="60"
                r="52"
                strokeWidth="10"
                fill="transparent"
                className={`${webMode === "Light" ? "stroke-gray-300" : "stroke-gray-700"}`}
              />

              {/* Progress */}
              <circle
                cx="60"
                cy="60"
                r="52"
                strokeWidth="10"
                fill="transparent"
                strokeLinecap="round"
                className={`transition-all duration-700 ${
                  webMode === "Light" ? "stroke-gray-800" : "stroke-white"
                }`}
                strokeDasharray={`${2 * Math.PI * 52}`}
                strokeDashoffset={`${2 * Math.PI * 52 * (1 - skill.level / 100)}`}
              />
            </svg>

            {/* Text inside */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-tight">
              <span
                className={`text-sm lg:text-base font-bold ${
                  webMode === "Light" ? "text-gray-900" : "text-gray-200"
                }`}
              >
                {skill.name}
              </span>
              <span
                className={`text-sm font-semibold ${
                  webMode === "Light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {skill.level}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);



function About(){
      const { webMode, toggleMode } = useContext(WebModeContext); // ✅ Use WebModeContext
    useEffect(() => {
        localStorage.setItem("NavBarText", "ABOUT");
      }, ["ABOUT"]);
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "scroll";
  return(
    <>
    <div className="w-full flex flex-col items-center justify-center ml-0 lg:ml-8">
    <div className="flex w-full justify-center items-center"></div>
    <div className="flex flex-col lg:flex-row font-Karla justify-center">
        <div className="flex flex-col text-left m:2 lg:m-4">
            <p className={`border-b-2 ${webMode === "Light" ? "border-slate-900 text-DarkColor" : "text-gray-300"} w-60 lg:w-80 py-2 font-bold text-xs lg:text-base`}>Birthday: <span className="font-normal"> 14, July 2005</span></p>
            <p className={`border-b-2 ${webMode === "Light" ? "border-slate-900 text-DarkColor" : "text-gray-300"} w-60 lg:w-80 py-2 font-bold text-xs lg:text-base`}>Email: <span className="font-normal"> premsharma786zx@gmail.com</span></p>
            <p className={`border-b-2 ${webMode === "Light" ? "border-slate-900 text-DarkColor" : "text-gray-300"} w-60 lg:w-80 py-2 font-bold text-xs lg:text-base`}>Phone: <span className="font-normal"> +91 9879959544</span></p>
        </div>
        <div className="flex flex-col text-left m:2 lg:m-4">
            <p className={`border-b-2 ${webMode === "Light" ? "border-slate-900 text-DarkColor" : "text-gray-300"} w-60 lg:w-80 py-2 font-bold text-xs lg:text-base`}>Age: <span className="font-normal"> 20</span></p>
            <p className={`border-b-2 ${webMode === "Light" ? "border-slate-900 text-DarkColor" : "text-gray-300"} w-60 lg:w-80 py-2 font-bold text-xs lg:text-base`}>Degree:<span className="font-normal"> BCA Graduated</span></p>
            <p className={`border-b-2 ${webMode === "Light" ? "border-slate-900 text-DarkColor" : "text-gray-300"} w-60 lg:w-80 py-2 font-bold text-xs lg:text-base`}>City:<span className="font-normal"> Udaipur</span></p>
        </div>
    </div>
    <div className="mt-7">
    <Button as="a" href='https://premsharma1231.github.io/Purvish_Portfolio/LetsTalk' filled rel="noopener noreferrer">
        Let's Work Together?
    </Button>
    </div>


    <div className="text-center mt-12">

    <SkillsSection webMode={webMode} />

    {/* <div className="flex flex-col justify-center items-center mt-16">
        <span className={`${webMode === "Light" ? " text-DarkColor" : "text-gray-300"} font-Bungee text-lg lg:text-2xl underline`}>Github Streak Statistics</span>
        <img className="mt-5 w-11/12 lg:w-10/12" src="https://streak-stats.demolab.com/?user=premsharma1231" alt="Unable to Fetch Image" />
    </div> */}
    </div>
        {/* <Github/> */}
        <Education/>
        <FooterForAll/>
    </div>
    </>
)
}

export default About;