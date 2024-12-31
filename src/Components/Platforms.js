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
        <div>

        <div className="top-0 box left-12 h-44 w-1 bg-gray-200 rounded-full absolute"></div>
        <div className="absolute left-6 top-48 ">
        <FontAwesomeIcon className="w-8 h-8 hover:cursor-pointer transition-all bg-white p-2 rounded-full" icon={faGithub} />
        </div>
        {/* <div className="h-10 w-1 bg-gray-200 absolute left-12 top-62"></div> */}
        <div className="absolute left-6 top-64">
        <FontAwesomeIcon className="w-8 h-8 hover:cursor-pointer transition-all bg-white p-2 rounded-full" icon={faLinkedin} />
        </div>
        <div className="absolute left-6 top-2/4">
        <FontAwesomeIcon className="w-8 h-8 hover:cursor-pointer transition-all bg-white p-2 rounded-full" icon={faEnvelope} />
        </div>
        <div className="absolute left-6 top-96">
        <FontAwesomeIcon className="w-8 h-8 hover:cursor-pointer hover:font-white hover:bg-black transition-all bg-white p-2 rounded-full" icon={faInstagram} />
        </div>
        </div>
        </>
    )
}

export default Platforms;