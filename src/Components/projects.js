import React from "react";
import Projectcard from "./projectcard";

function Projects() {
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "scroll";

  const Objects = [
    {
      author: "Purvish Sharma",
      title: "Tip-Calculator from Frontend-Mentor",
      description: "The Tip Calculator app helps users easily calculate tips based on total bill amounts, offering quick and accurate results.",
      GithubUrl: "https://github.com/premsharma1231/Tip-Calculator?tab=readme-ov-file",
      LiveUrl: "https://premsharma1231.github.io/Tip-Calculator/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/Tip-Calculator/refs/heads/main/Screenshot%20(197).png",
    },
    {
      author: "Purvish Sharma",
      title: "Text-Utility",
      description: "The Text Utility Web App is a versatile tool designed to simplify text manipulation tasks and enhance productivity. This app provides a clean and intuitive interface, enabling users to effortlessly manage and transform their text with just a few clicks.",
      GithubUrl: "https://github.com/premsharma1231/Text-Utility?tab=readme-ov-file",
      LiveUrl: "https://premsharma1231.github.io/Text-Utility/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/Text-Utility/refs/heads/main/Screenshot%20(195).png",
    },
    {
      author: "Purvish Sharma",
      title: "Monkey-News",
      description: "Monkey News is an innovative web app that keeps you updated with the latest news from around the world. With its sleek design and user-friendly interface, it delivers real-time news, covering various categories, all in one place. Stay informed effortlessly with Monkey News!",
      GithubUrl: "https://github.com/premsharma1231/MonkeyNews?tab=readme-ov-file",
      LiveUrl: "https://drive.google.com/file/d/1SdsDve5vY_tZS7lpsMOzisHA5ZqH0Rec/view",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/MonkeyNews/refs/heads/main/Screenshot%20(192).png",
    },
    {
      author: "Sharma Purvish",
      title: "Netflix-Clone",
      description: "Netflix Clone is a front-end project built with HTML, CSS, and JavaScript. It replicates Netflix's homepage with responsive layouts, interactive movie posters, and a dynamic navigation bar, showcasing my skills in creating UI elements without external libraries.",
      GithubUrl: "https://github.com/premsharma1231/NetflixClone/blob/main/README.md",
      LiveUrl: "https://premsharma1231.github.io/NetflixClone/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/NetflixClone/refs/heads/main/Screenshot%20(198).png",
    },
    {
      author: "Purvish Sharma",
      title: "Clip-Board Page",
      description: "By Frontend-Mentor, Clipboard Landing Page is a sleek, responsive web design that provides a modern and intuitive user interface for clipboard management. Built with HTML, CSS, and JavaScript, it showcases my ability to create user-friendly, visually appealing landing pages with interactive features.",
      GithubUrl: "https://github.com/premsharma1231/Clip-Board-Landing-Page",
      LiveUrl: "https://premsharma1231.github.io/Clip-Board-Landing-Page/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/Clip-Board-Landing-Page/refs/heads/main/Screenshot%20(200).png",
    },
    {
      author: "Purvish Sharma",
      title: "Ghar-Ka-Khana",
      description: "Ghar-Ka-Khana is a food delivery service platform designed with a user-friendly interface and engaging animations. Built using HTML, CSS, and JavaScript, it offers a seamless browsing experience for users to explore various home-cooked meal options.",
      GithubUrl: "https://github.com/premsharma1231/Ghar-Ka-Khana",
      LiveUrl: "https://premsharma1231.github.io/Ghar-Ka-Khana/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/Ghar-Ka-Khana/refs/heads/main/Screenshot%20(201).png",
    },
    {
      author: "Purvish Sharma",
      title: "Monkey-Calculator",
      description: "Monkey-Calculator is a simple yet powerful calculator app built using HTML, CSS, and JavaScript. It features a clean design, a history section, and supports both mouse and keyboard input, offering a smooth user experience for quick calculations.",
      GithubUrl: "https://github.com/premsharma1231/MonkeyCalculator",
      LiveUrl: "https://premsharma1231.github.io/MonkeyCalculator/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/MonkeyCalculator/refs/heads/main/Screenshot%20(202).png",
    },
    {
      author: "Purvish Sharma",
      title: "Monkey-Todo-List",
      description: "MonkeyToDoList is a dynamic to-do list app created using HTML, CSS, and JavaScript. It allows users to add, edit, and delete tasks, with the ability to mark tasks as completed. The app features a clean and interactive design, making task management easy and efficient.",
      GithubUrl: "https://github.com/premsharma1231/MonkeyTodoList",
      LiveUrl: "https://premsharma1231.github.io/MonkeyTodoList/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/MonkeyTodoList/refs/heads/main/Screenshot%20(204).png",
    },
  ];

  return (
    <div className="mt-9 top-40 ml-24 pb-36 flex flex-wrap justify-center gap-8">
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
