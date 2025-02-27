import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';




function Platforms(){
    return(
        <>
        {/* hover:left-7 hover:w-9 hover:h-9 */}
        <div className="overflow-x-hidden ml-0 flex flex-row w-full justify-between items-center fixed bottom-0
        sm:flex sm:flex-row sm:fixed sm:bottom-5 sm:w-12 sm:ml-5
        md:flex md:flex-col md:fixed md:bottom-9 md:w-12 md:ml-5 
        lg:flex lg:flex-col lg:fixed lg:bottom-14 lg:w-12 lg:ml-5
        ">
        
        {/* <span className="absolute top-0 h-28 w-2 z-10 bg-gray-900 rounded-b"></span> */}

        <div className="flex flex-row justify-between w-full items-center h-14 mt-0
        sm:flex sm:flex-row sm:h-14 sm:mt-4
        md:flex md:flex-col md:h-64 md:mt-4
        lg:flex lg:flex-col lg:h-64 lg:mt-4
        ">
  {/* Github Profile with Tooltip */}
        <Tooltip className="text-xl" title="Github" slots={{transition: Zoom}} arrow placement="right">
          <a href="https://github.com/premsharma1231" 
          target="_blank" 
          rel="noopener noreferrer"><FontAwesomeIcon 
            className="w-8 h-8 text-black  hover:text-gray-700 rounded-full transition-all p-2 " 
            icon={faGithub}
            bounce
          /></a>
        </Tooltip>

  {/* LinkedIn Icon */}
  <Tooltip className="text-xl" title="LinkedIn" slots={{transition: Zoom}} arrow placement="right">
  <a href="https://www.linkedin.com/in/sharma-purvish-591120248/" 
  target="_blank" 
  rel="noopener noreferrer"><FontAwesomeIcon 
    className="w-8 h-8 text-black  hover:text-gray-700 rounded-full transition-all p-2 " 
    icon={faLinkedin}
    bounce 
  /></a>
  </Tooltip>

  {/* Email Icon */}
  <Tooltip className="text-xl" title="Mail" slots={{transition: Zoom}} arrow placement="right">
  <a href="mailto:premsharma786zx@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"><FontAwesomeIcon 
    className="w-8 h-8 text-black  hover:text-gray-700 rounded-full transition-all p-2 "
    icon={faEnvelope} 
    bounce
  /></a>
  </Tooltip>
  {/* Instagram Icon */}
  <Tooltip className="text-xl" title="Instagram" slots={{transition: Zoom}} arrow placement="right">
  <a href="https://www.instagram.com/premmsharmaaaa/" 
  target="_blank" 
  rel="noopener noreferrer"><FontAwesomeIcon 
    className="w-8 h-8 text-black  hover:text-gray-700 rounded-full transition-all p-2 " 
    icon={faInstagram}
    bounce
  /></a>
  </Tooltip>
</div>
        </div>
        </>
    )
}

export default Platforms;