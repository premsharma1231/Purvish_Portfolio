import React from "react";
import Button from "./button";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";
import "../App.css";
import "../index.css";
import Tilt from 'react-parallax-tilt';

function Projectcard({ title, description, GithubUrl, LiveUrl, urlToImage }) {
  document.body.style.cursor = "none";
  return (
    <>
    <Tilt className="card flex flex-col justify-between w-5/12 h-8/12 bg-gray-300 text-center font-Karla border-none shadow" perspective={1500} glareEnable={true} tiltMaxAngleX={5} tiltMaxAngleY={5} glareMaxOpacity={0.10}>
    <div>
      <img src={urlToImage} className="card-img-top p-2 pb-0" alt={title} />
      <div className="card-body">
        <h5 className="card-title p-2 rounded-lg text-4xl font-bold font-kanit">{title}</h5>
        <p className="card-text p-2 rounded-lg">{description}</p>
        <div className="flex justify-between mt-2">
        <Button as="a" href={GithubUrl} filled target="_blank" rel="noopener noreferrer">GitHub</Button>
        <Button as="a" href={LiveUrl} filled target="_blank" rel="noopener noreferrer">Live Demo</Button>
        </div>
      </div>
    </div>
    </Tilt>
    </>
  );
}

export default Projectcard;