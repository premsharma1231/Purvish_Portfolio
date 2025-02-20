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
        <div className="ml-5 flex flex-col w-12 items-center fixed bottom-14">
        
        {/* <span className="absolute top-0 h-28 w-2 z-10 bg-gray-900 rounded-b"></span> */}

        <div className="flex flex-col justify-between h-64 mt-4">
  {/* Github Profile with Tooltip */}
        <Tooltip className="text-xl" title="Github" slots={{transition: Zoom}} arrow placement="right">
          <a href="https://github.com/premsharma1231" 
          target="_blank" 
          rel="noopener noreferrer"><FontAwesomeIcon 
            className="w-8 h-8 text-black  hover:text-gray-700 rounded-full transition-all p-2 " 
            icon={faGithub}
            // bounce
          /></a>
        </Tooltip>

  {/* LinkedIn Icon */}
  <Tooltip className="text-xl" title="LinkedIn" slots={{transition: Zoom}} arrow placement="right">
  <a href="https://www.linkedin.com/in/sharma-purvish-591120248/" 
  target="_blank" 
  rel="noopener noreferrer"><FontAwesomeIcon 
    className="w-8 h-8 text-black  hover:text-gray-700 rounded-full transition-all p-2 " 
    icon={faLinkedin} 
    // bounce 
  /></a>
  </Tooltip>

  {/* Email Icon */}
  <Tooltip className="text-xl" title="Mail" slots={{transition: Zoom}} arrow placement="right">
  <a href="mailto:premsharma786zx@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"><FontAwesomeIcon 
    className="w-8 h-8 text-black  hover:text-gray-700 rounded-full transition-all p-2 "
    icon={faEnvelope} 
    // bounce
  /></a>
  </Tooltip>
  {/* Instagram Icon */}
  <Tooltip className="text-xl" title="Instagram" slots={{transition: Zoom}} arrow placement="right">
  <a href="https://www.instagram.com/premmsharmaaaa/" 
  target="_blank" 
  rel="noopener noreferrer"><FontAwesomeIcon 
    className="w-8 h-8 text-black  hover:text-gray-700 rounded-full transition-all p-2 " 
    icon={faInstagram}
    // bounce
  /></a>
  </Tooltip>
</div>

        </div>
        </>
    )
}

export default Platforms;