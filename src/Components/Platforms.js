import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Platforms(){
    return(
        <>
        {/* hover:left-7 hover:w-9 hover:h-9 */}
        <div className="ml-5 flex flex-col w-12 items-center">
        
        <span className="h-28 w-2 z-10 bg-gray-900 rounded-b"></span>

        <div className="flex flex-col justify-between h-64 mt-4">
        <FontAwesomeIcon className="w-8 h-8 hover:cursor-pointer transition-all p-2" icon={faGithub} />
        <FontAwesomeIcon className="w-8 h-8 hover:cursor-pointer transition-all p-2" icon={faLinkedin} />
        <FontAwesomeIcon className="w-8 h-8 hover:cursor-pointer transition-all p-2" icon={faEnvelope} />
        <FontAwesomeIcon className="w-8 h-8 hover:cursor-pointer transition-all p-2" icon={faInstagram} />
        </div>
        </div>
        </>
    )
}

export default Platforms;