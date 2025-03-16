import React, { useContext } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { WebModeContext } from "./WebModeContext";

function Platforms() {
  const { webMode } = useContext(WebModeContext);
  document.body.style.overflowX = "hidden";

  const socialLinks = [
    { href: "https://github.com/premsharma1231", title: "Github", icon: faGithub },
    { href: "https://www.linkedin.com/in/sharma-purvish-591120248/", title: "LinkedIn", icon: faLinkedin },
    { href: "mailto:premsharma786zx@gmail.com", title: "Mail", icon: faEnvelope },
    { href: "https://www.instagram.com/premmsharmaaaa/", title: "Instagram", icon: faInstagram },
  ];

  return (
    <div
      className={`overflow-x-hidden flex justify-between items-center px-2 py-2 mt-3 mb-5 sm:fixed sm:bottom-5 sm:w-12 sm:ml-5 md:bottom-9 md:flex-col lg:bottom-14 lg:rounded-full 
        ${webMode === "Light" ? "bg-gray-100" : "bg-gray-700"}`}
    >
      <div className="flex flex-row justify-between w-full items-center sm:flex-row md:flex-col lg:flex-col">
        {socialLinks.map(({ href, title, icon }, index) => (
          <Tooltip key={index} title={title} slots={{ transition: Zoom }} arrow placement="right">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className={`w-8 h-8 ${webMode === "Light" ? "text-black" : "text-white"} hover:text-gray-700 rounded-full transition-all p-2 lg:py-4`}
                icon={icon}
                bounce
              />
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Platforms;
