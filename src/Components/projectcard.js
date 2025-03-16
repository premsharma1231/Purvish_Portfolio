import React from "react";
import Button from "./Button";
import Tilt from "react-parallax-tilt";

function ProjectCard({ title, description, GithubUrl, LiveUrl, urlToImage, languageUsed }) {
  return (
    <Tilt
      className="card flex flex-col justify-center items-center w-full lg:w-5/12 h-full p-2 bg-gray-300 text-center font-Karla shadow"
      perspective={2000}
      glareEnable
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareMaxOpacity={0}
    >
      <div className="flex flex-col">
        <img src={urlToImage} className="card-img-top w-full" alt={title} />
        <div className="card-body flex flex-col items-center justify-evenly"> 
          <h5 className="card-title p-2 pt-5 rounded-lg text-2xl lg:text-4xl font-bold font-kanit">{title}</h5>
          <p className="card-text p-2">{languageUsed}</p>
          <p className="card-text p-2">{description}</p>
          <div className="flex justify-between p-3 w-full">
            <Button as="a" href={GithubUrl} filled target="_blank" rel="noopener noreferrer">GitHub</Button>
            <Button as="a" href={LiveUrl} filled target="_blank" rel="noopener noreferrer">Live Demo</Button>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default ProjectCard;
