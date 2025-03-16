import React from "react";
import Projectcard from "./Projectcard";
import FooterForAll from "./FooterForAll";
// import Platforms from "./Platforms";
// import Tilt from 'react-parallax-tilt';

function Projects() {
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "scroll";
  localStorage.getItem("WebMode");

  const projects = [  
    {
      author: "Purvish Sharma",
      title: "Monkey Currency Calculator",
      description: "Monkey Currency Calculator is a fast and user-friendly currency converter that helps you convert exchange rates in real time. With a sleek design and smooth animations, it provides accurate currency conversions effortlessly. Perfect for travelers, traders, and finance enthusiasts! 🚀💰 Try it now! 🎯🔄",
      languageUsed: "React Vite - Tailwind CSS - Bootstrap 5 - Prime React - Google Fonts",
      GithubUrl: "https://github.com/premsharma1231/MonkeyCurrencyCalculator?tab=readme-ov-file",
      LiveUrl: "https://premsharma1231.github.io/MonkeyCurrencyCalculator/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/MonkeyCurrencyCalculator/refs/heads/main/Screenshot%20(220).png",
    },
    {
      author: "Purvish Sharma",
      title: "Tip-Calculator from Frontend-Mentor",
      description: "Tip Calculator is a simple and efficient tool that helps you quickly calculate tips and split bills with ease. 💰✨ Just enter the bill amount, select the tip percentage, and get instant results. Perfect for dining out with friends or budgeting tips hassle-free! 🍽️✅",
      languageUsed: "HTML 5 - CSS 3 - Frontend Mentor Material (Images and Fonts)",
      GithubUrl: "https://github.com/premsharma1231/Tip-Calculator?tab=readme-ov-file",
      LiveUrl: "https://premsharma1231.github.io/Tip-Calculator/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/Tip-Calculator/refs/heads/main/Screenshot%20(197).png",
    },
    {
      author: "Purvish Sharma",
      title: "Text-Utility",
      description: "Text Utility App is a powerful tool for text manipulation, offering features like case conversion, text formatting, extra space removal, text-to-speech, and more. 📝✨ Easily transform and optimize your text with a user-friendly interface. Perfect for students, writers, and professionals! 🚀✅",
      languageUsed: "React JS - Tailwind CSS - Bootstrap 5 - Language Tool",
      GithubUrl: "https://github.com/premsharma1231/Text-Utility?tab=readme-ov-file",
      LiveUrl: "https://premsharma1231.github.io/Text-Utility/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/Text-Utility/refs/heads/main/Screenshot%20(195).png",
    },
    {
      author: "Purvish Sharma",
      title: "Monkey-News",
      description: "MonkeyNews is a dynamic news app that fetches and displays the latest headlines from various sources. 📰⚡ Stay updated with real-time news across different categories in a clean, user-friendly interface. Perfect for anyone who wants quick and reliable news updates! 📢🔥!",
      languageUsed: "React JS - Tailwind CSS - NewsAPI - Bootstrap 5",
      GithubUrl: "https://github.com/premsharma1231/MonkeyNews?tab=readme-ov-file",
      LiveUrl: "https://drive.google.com/file/d/1SdsDve5vY_tZS7lpsMOzisHA5ZqH0Rec/view",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/MonkeyNews/refs/heads/main/Screenshot%20(192).png",
    },
    {
      author: "Sharma Purvish",
      title: "Netflix-Clone",
      description: "Netflix Clone 🎬🔥 is a stunning front-end replica of Netflix built using only HTML and CSS. It features a sleek UI with a responsive design, showcasing a homepage with movie banners, categories, and a clean layout. Perfect for practicing web design and layout structuring! 🍿🎥🚀",
      languageUsed: "HTML 5 - CSS 3 - JavaScript - Netflix Material (Images and Fonts)",
      GithubUrl: "https://github.com/premsharma1231/NetflixClone/blob/main/README.md",
      LiveUrl: "https://premsharma1231.github.io/NetflixClone/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/NetflixClone/refs/heads/main/Screenshot%20(198).png",
    },
    {
      author: "Purvish Sharma",
      title: "Clip-Board Page",
      description: "Clipboard Landing Page 📋🚀 is a sleek and responsive landing page showcasing the features of a clipboard management tool. Built with HTML and CSS, it has a modern design with smooth layouts, perfect typography, and a clean user experience. Ideal for learning UI structuring and responsive design! 🔥✨",
      languageUsed: "HTML 5 - CSS 3 - Scroll Animation",
      GithubUrl: "https://github.com/premsharma1231/Clip-Board-Landing-Page",
      LiveUrl: "https://premsharma1231.github.io/Clip-Board-Landing-Page/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/Clip-Board-Landing-Page/refs/heads/main/Screenshot%20(200).png",
    },
    {
      author: "Purvish Sharma",
      title: "Ghar Ka Khana 🍽️🏠",
      description: "Ghar-Ka-Khana is a food delivery service platform designed with a user-friendly interface and engaging animations. Built using HTML, CSS, and JavaScript, it offers a seamless browsing experience for users to explore various home-cooked meal options.",
      languageUsed: "HTML 5 - CSS 3 - JavaScript",
      GithubUrl: "https://github.com/premsharma1231/Ghar-Ka-Khana",
      LiveUrl: "https://premsharma1231.github.io/Ghar-Ka-Khana/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/Ghar-Ka-Khana/refs/heads/main/Screenshot%20(201).png",
    },
    {
      author: "Purvish Sharma",
      title: "MonkeyCalculator 🧮⚡",
      description: "Monkey-Calculator is a simple yet powerful calculator app built using HTML, CSS, and JavaScript. It features a clean design, a history section, and supports both mouse and keyboard input, offering a smooth user experience for quick calculations.",
      languageUsed: "HTML 5 - CSS 3 - JavaScript",
      GithubUrl: "https://github.com/premsharma1231/MonkeyCalculator",
      LiveUrl: "https://premsharma1231.github.io/MonkeyCalculator/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/MonkeyCalculator/refs/heads/main/Screenshot%20(202).png",
    },
    {
      author: "Purvish Sharma",
      title: "MonkeyTodoList ✅📋",
      description: "MonkeyToDoList is a dynamic to-do list app created using HTML, CSS, and JavaScript. It allows users to add, edit, and delete tasks, with the ability to mark tasks as completed. The app features a clean and interactive design, making task management easy and efficient.",
      languageUsed: "HTML 5 - CSS 3 - JavaScript",
      GithubUrl: "https://github.com/premsharma1231/MonkeyTodoList",
      LiveUrl: "https://premsharma1231.github.io/MonkeyTodoList/",
      urlToImage: "https://raw.githubusercontent.com/premsharma1231/MonkeyTodoList/refs/heads/main/Screenshot%20(204).png",
    },
  ];

  return (
    <>
    <div className="flex flex-col items-center">
      <div className="mt-12 lg:mt-16 pb-20 lg:px-8 px-0 flex flex-col flex-wrap justify-center gap-8 lg:flex-row lg:ml-20">
        {projects.map((project, index) => (
          <Projectcard key={index} {...project} />
        ))}
      </div>
      <FooterForAll />
    </div>
    </>
  );
}

export default Projects;