import React from "react";
import Projectcard from "./projectcard";

function Projects() {
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "scroll";

  const Objects = [
    {
      author: "Author 1",
      title: "Project 1",
      description: "This is a description of Project 1.",
      GithubUrl: "https://github.com/example/project1",
      LiveUrl: "https://liveproject1.com",
      urlToImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVybHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
    },
    {
      author: "Author 2",
      title: "Project 2",
      description: "This is a description of Project 2.",
      GithubUrl: "https://github.com/example/project2",
      LiveUrl: "https://liveproject2.com",
      urlToImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVybHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
    },
    {
      author: "Author 2",
      title: "Project 2",
      description: "This is a description of Project 2.",
      GithubUrl: "https://github.com/example/project2",
      LiveUrl: "https://liveproject2.com",
      urlToImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVybHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
    },
    {
      author: "Author 2",
      title: "Project 2",
      description: "This is a description of Project 2.",
      GithubUrl: "https://github.com/example/project2",
      LiveUrl: "https://liveproject2.com",
      urlToImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVybHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
    },
    {
      author: "Author 2",
      title: "Project 2",
      description: "This is a description of Project 2.",
      GithubUrl: "https://github.com/example/project2",
      LiveUrl: "https://liveproject2.com",
      urlToImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVybHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
    },
    {
      author: "Author 2",
      title: "Project 2",
      description: "This is a description of Project 2.",
      GithubUrl: "https://github.com/example/project2",
      LiveUrl: "https://liveproject2.com",
      urlToImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVybHxlbnwwfHwwfHx8MA%3D%3D", // Replace with your image URL
    },
    // Add more projects as needed
  ];

  return (
    <div className="absolute top-40 left-24 pb-36 flex flex-wrap justify-center gap-8">
      {Objects.map((project, index) => (
        <Projectcard
          key={index}
          title={project.title}
          description={project.description}
          GithubUrl={project.GithubUrl}
          LiveUrl={project.LiveUrl}
          urlToImage={project.urlToImage}
        />
      ))}
    </div>
  );
}

export default Projects;
