import React from "react";
import Button from "./button";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import "../App.css";
import "../index.css";
import Tilt from 'react-parallax-tilt';

function Projectcard({title, description, GithubUrl, LiveUrl, urlToImage, languageUsed }) {
  document.body.style.cursor = "none";
  return (
    <>
    <Tilt className="card flex flex-col justify-center items-center w-5/12 h-full p-2 bg-gray-300 text-center font-Karla border-none shadow" perspective={2000} glareEnable={true} tiltMaxAngleX={5} tiltMaxAngleY={5} glareMaxOpacity={0}>
    <div className="flex flex-col">
      <img src={urlToImage} className="card-img-top w-full" alt={title} />
      <div className="card-body flex flex-col items-center justify-evenly"> 
        <div className="flex flex-col justify-between mt-2">
        <h5 className="card-title p-2 pt-5 rounded-lg text-4xl font-bold font-kanit">{title}</h5>
        <p className="card-text p-2 pt-5 rounded-lg">{languageUsed}</p>
        <p className="card-text p-2 pt-5 rounded-lg">{description}</p>
        <div className="flex justify-evenly p-3 pt-6">
        <Button as="a" href={GithubUrl} filled target="_blank" rel="noopener noreferrer">GitHub</Button>
        <Button as="a" href={LiveUrl} filled target="_blank" rel="noopener noreferrer">Live Demo</Button>
        </div>
        </div>
      </div>
    </div>
    </Tilt>
    </>
  );
}

export default Projectcard;