import React from "react";
import Button from "./button";
  

function Projectcard({ title, description, GithubUrl, LiveUrl, urlToImage }) {
  return (
    <div className="card w-5/12">
      <img src={urlToImage} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text p-2">{description}</p>
        <div className="flex justify-between">
        <Button as="a" href={GithubUrl} filled target="_blank" rel="noopener noreferrer">GitHub</Button>
        <Button as="a" href={LiveUrl} filled target="_blank" rel="noopener noreferrer">Live Demo</Button>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;