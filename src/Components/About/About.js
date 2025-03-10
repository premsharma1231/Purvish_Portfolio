import React, {useEffect} from "react";
import Button from "../Button";
import { faBootstrap, faCss, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Education from './Education';
import Github from "./Githubcalendar";
import FooterForAll from "../FooterForAll";


function About(){
    useEffect(() => {
        localStorage.setItem("NavBarText", "ABOUT");
      }, ["ABOUT"]);
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "scroll";
  return(
    <>
    <div className="w-full flex flex-col items-center justify-center ml-0 lg:ml-8">
    <div className="flex w-full justify-center items-center"></div>
    <div className="flex flex-col lg:flex-row font-Karla justify-center">
        <div className="flex flex-col text-left m:2 lg:m-4">
            <p className="border-b-2 border-slate-900 w-60 lg:w-80 py-2 font-bold text-xs lg:text-base">Birthday: <span className="font-normal"> 14, July 2005</span></p>
            <p className="border-b-2 border-slate-900 w-60 lg:w-80 py-2 font-bold text-xs lg:text-base">Email: <span className="font-normal"> premsharma786zx@gmail.com</span></p>
            <p className="border-b-2 border-slate-900 w-60 lg:w-80 py-2 font-bold text-xs lg:text-base">Phone: <span className="font-normal"> +91 9879959544</span></p>
        </div>
        <div className="flex flex-col text-left m:2 lg:m-4">
            <p className="border-b-2 border-slate-900 w-60 lg:w-80 py-2 font-bold text-xs lg:text-base">Age: <span className="font-normal"> 19</span></p>
            <p className="border-b-2 border-slate-900 w-60 lg:w-80 py-2 font-bold text-xs lg:text-base">Degree:<span className="font-normal"> Pursuing BCA</span></p>
            <p className="border-b-2 border-slate-900 w-60 lg:w-80 py-2 font-bold text-xs lg:text-base">City:<span className="font-normal"> Ahmedabad</span></p>
        </div>
    </div>
    <div className="mt-7">
    <Button as="a" href='http://localhost:3001/Purvish_Portfolio/LetsTalk' filled rel="noopener noreferrer">
        Let's Work Together?
    </Button>
    </div>


    <div className="text-center mt-12">
    <span className="font-Bungee text-2xl underline">Skills</span>
    <div className="flex flex-wrap justify-center items-center mt-4 mb-12 text-xs lg:text-xl">
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon bounce icon={faHtml5} className="w-10 h-10
        lg:w-20
        lg:h-20
        "/>
        HTML 5
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon bounce icon={faCss} className="w-10 h-10
        lg:w-20
        lg:h-20
        "/>
        CSS
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon bounce icon={faJs} className="w-10 h-10
        lg:w-20
        lg:h-20
        "/>
        JavaScript
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon bounce icon={faReact} className="w-10 h-10
        lg:w-20
        lg:h-20
        "/>
        React JS
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon bounce icon={faBootstrap} className="w-10 h-10
        lg:w-20
        lg:h-20
        "/>
        BootStrap 5
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <img src="https://raw.githubusercontent.com/premsharma1231/LinksTOuse/refs/heads/main/c-sharp.png" className="w-10 h-10
        lg:w-20
        lg:h-20
        " alt="" />
        <span>C++</span>
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
            <img className="w-10 h-10
        lg:w-20
        lg:h-20
        rounded-xl" bounce src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAS1BMVEX///84vfgwu/giufjl9f76/f/v+f7V7/255PwVt/iW2Puj3PtbxvnJ6v1UxPmr3/yP1ft90PpHwfloyvnc8v7B5/x2zfoAtPiG0/uOC8HlAAAEqUlEQVRogd2b65qjIAyGBTyBaBXUev9XutBpp54lIe4+z36/Zjot74RECAlNEqDytKhL1VndGOZkGju2VVn3eQYdCaJCddoIJ845e8v96F9oRlWmt0DTYeSeyPb14hvV58TYYTLyiDmjC6Grno6aK3Zo6Y7ltqbxd66MCKS+2dKW8djsYUSotTOzdRHJLayEUt9Wd1ExXgX7dotm+PlOLcy5K8kRaXQPDKqNhEF5eoAH1VpcKji3xrt3bvQEfaaHyGn+JRvYItrHz/OHrCEh1hsqrl/AASGm6bj+iQ4mt0QO/pB5HcYtabkeHUTOSR4kBHmk57rgvibXd3Cdrsj5+kl6JXMn2Vao5EVsV7PI4lw+pRlbVanJGvmMpJ+S8+/QnDfTMF/w0nLSESsaP7W54r9vG+vtMpsPY0C2eUQ+8XP69jDnh7t43+EnXB5mJW8PS3s2K0ODXmFEdTDme0rK8100U2ijDzbo1y4s9PVhYGBost3xYeYXLdGFJA0peuPkZtiM1vMTL6yUj2hHb9PPhziJu7UyPJmblXXuKQJk4VnEti2WsyflI5zr1OHJi3EqGejf7yfQ5MUwdgQfbCfcmW4J7i0U66SQNs/HKDBFhAxp82IMBBcd2yjWmoyxmQCM8zMJOFNwm0nAGJuJwEkJtZkKnJTA1IAMDD3Z0oGTXkMcTQh2IQaYblJwUrNgo2nBSdaFJoHEYGd0YM5NDk6yBws5X9GDXeb7CKjm3wF2yVvZ8IsIvwec+IaNlmdTfhvYmd2rZtEo+ltgr3TYdKp++lTi+rPR8r25hy9lGLeaG9+am6qhSIq6am3DuJDy+Xw6rzTWv57e2rHz4uuCjp8JyR2+pG6aLXUUdY4vmSrug58+bEJodU+n8gL8ikFd3OLvCzB7dey2R/i/AX5V2mI7djiwL+9P1L4OA/tuCvF8h4KdqyfSZysY7IxuCJvhELAzGlYiIQP7guA/AjNhqRwNBDtHE5GhYMZxTeF4sCOTBDccDOkV0oJpyBgw2s/ZbINFgZE2Z/NSKQ7syIgIm+b7DBJ82kM6kHrOf8OCHRm4Qw9yUaSN6NjBbC65WFT/bUzHDuDnmq8XnnREN69WNpzby/i4+WfQd3qCyQ9nnNhu5lmLnm6hApLufHo18PbeOeB7hePlNvlzO0t0u38sSDt2i+ksfypQ/CASU1BBcCE5nUR3/b57xw87PBG9Qs6qg/kufh+Zs4sgERflhGiHDTstv4sEb465SRbRsWPCneWr73E6K5Q1s4iV56tcDPl1lJfCaDvahstlrYlf9KQjOrNfPN+pMPHL7TvK5kOJ6zuDBDZvxYPu7d1gc9htLnqbRRvCdZqIL87p4OINLdkAUiRsN3pPkMuRlGTINQuvEp+KLRR+reQj/AY9F0fULvLY29W+ZoIrUUXcY38Jea87AXXsdiQ1vmiRTficm8WVpmqNC28R/UWJxPeuwNiIryp8lT8amNVSVESl3mywQY1KL3c2I+2i9JUVl2yXdJkWfF6/Ut5Xmu0mVD+GOjnqTV2bvK4ml7W6FFLwj4RwyaXRXTvc1a95K0vToqxUZ22jtbbd5L9Kl977Xbr/Qn8AjYA3+S2+t9oAAAAASUVORK5CYII=" alt="" />
            <span>Tailwind CSS</span>
        </span>
    </div>
    <div className="flex flex-col justify-center items-center mt-16">
        <span className="font-Bungee text-xl lg:text-2xl underline">Github Streak Statistics</span>
        <img className="mt-5 w-64 lg:w-3/4" src="https://streak-stats.demolab.com/?user=premsharma1231" alt="Unable to Fetch Image" />
    </div>
    </div>
        <Github/>
        <Education/>
        <FooterForAll/>
    </div>
    </>
)
}

export default About;