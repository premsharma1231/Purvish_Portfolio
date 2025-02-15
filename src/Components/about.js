import React from "react";
import "../App.css";
import Button from "./button";
import { faBootstrap, faCss, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LetsTalk from './letstalk';
import { Link } from "react-router-dom";



function About(){
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "scroll";
  return(
    <>
    <div className="w-full flex flex-col items-center justify-center ml-8">
    <div className="flex w-full justify-center items-center"></div>
    <div className="flex font-Karla justify-center">
        <div className="flex flex-col text-left m-4">
            <p className="border-b-2 border-slate-900 w-80 py-2 font-bold">Birthday: <span className="font-normal"> 14, July 2005</span></p>
            <p className="border-b-2 border-slate-900 w-80 py-2 font-bold">Email: <span className="font-normal"> premsharma786zx@gmail.com</span></p>
            <p className="border-b-2 border-slate-900 w-80 py-2 font-bold">Phone: <span className="font-normal"> +91 9879959544</span></p>
        </div>
        <div className="flex flex-col text-left m-4">
            <p className="border-b-2 border-slate-900 w-80 py-2 font-bold" >Age: <span className="font-normal"> 19</span></p>
            <p className="border-b-2 border-slate-900 w-80 py-2 font-bold" >Degree:<span className="font-normal"> Pursuing BCA</span></p>
            <p className="border-b-2 border-slate-900 w-80 py-2 font-bold" >City:<span className="font-normal"> Ahmedabad</span></p>
        </div>
    </div>
    <div className="mt-7">
    <Button as="a"  filled target="_blank" rel="noopener noreferrer">
        <Link to={LetsTalk}>Let's Work Together?</Link>
    </Button>
    </div>


    <div className="text-center mt-12">
    <span className="font-Bungee text-2xl underline">Skills</span>
    <div className="flex flex-wrap justify-center items-center mt-4 mb-12">
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon icon={faHtml5} className="w-20 h-20"/>
        HTML 5
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon icon={faCss} className="w-20 h-20"/>
        CSS
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon icon={faJs} className="w-20 h-20"/>
        JavaScript
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon icon={faReact} className="w-20 h-20"/>
        React JS
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <FontAwesomeIcon icon={faBootstrap} className="w-20 h-20"/>
        BootStrap 5
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
        <img src="https://raw.githubusercontent.com/premsharma1231/LinksTOuse/refs/heads/main/c-sharp.png" className="w-20" alt="" />
        <span>C++</span>
        </span>
        <span className="flex flex-col text-center justify-center font-Bungee items-center mx-5">
            <img className="w-20 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAS1BMVEX///84vfgwu/giufjl9f76/f/v+f7V7/255PwVt/iW2Puj3PtbxvnJ6v1UxPmr3/yP1ft90PpHwfloyvnc8v7B5/x2zfoAtPiG0/uOC8HlAAAEqUlEQVRogd2b65qjIAyGBTyBaBXUev9XutBpp54lIe4+z36/Zjot74RECAlNEqDytKhL1VndGOZkGju2VVn3eQYdCaJCddoIJ845e8v96F9oRlWmt0DTYeSeyPb14hvV58TYYTLyiDmjC6Grno6aK3Zo6Y7ltqbxd66MCKS+2dKW8djsYUSotTOzdRHJLayEUt9Wd1ExXgX7dotm+PlOLcy5K8kRaXQPDKqNhEF5eoAH1VpcKji3xrt3bvQEfaaHyGn+JRvYItrHz/OHrCEh1hsqrl/AASGm6bj+iQ4mt0QO/pB5HcYtabkeHUTOSR4kBHmk57rgvibXd3Cdrsj5+kl6JXMn2Vao5EVsV7PI4lw+pRlbVanJGvmMpJ+S8+/QnDfTMF/w0nLSESsaP7W54r9vG+vtMpsPY0C2eUQ+8XP69jDnh7t43+EnXB5mJW8PS3s2K0ODXmFEdTDme0rK8100U2ijDzbo1y4s9PVhYGBost3xYeYXLdGFJA0peuPkZtiM1vMTL6yUj2hHb9PPhziJu7UyPJmblXXuKQJk4VnEti2WsyflI5zr1OHJi3EqGejf7yfQ5MUwdgQfbCfcmW4J7i0U66SQNs/HKDBFhAxp82IMBBcd2yjWmoyxmQCM8zMJOFNwm0nAGJuJwEkJtZkKnJTA1IAMDD3Z0oGTXkMcTQh2IQaYblJwUrNgo2nBSdaFJoHEYGd0YM5NDk6yBws5X9GDXeb7CKjm3wF2yVvZ8IsIvwec+IaNlmdTfhvYmd2rZtEo+ltgr3TYdKp++lTi+rPR8r25hy9lGLeaG9+am6qhSIq6am3DuJDy+Xw6rzTWv57e2rHz4uuCjp8JyR2+pG6aLXUUdY4vmSrug58+bEJodU+n8gL8ikFd3OLvCzB7dey2R/i/AX5V2mI7djiwL+9P1L4OA/tuCvF8h4KdqyfSZysY7IxuCJvhELAzGlYiIQP7guA/AjNhqRwNBDtHE5GhYMZxTeF4sCOTBDccDOkV0oJpyBgw2s/ZbINFgZE2Z/NSKQ7syIgIm+b7DBJ82kM6kHrOf8OCHRm4Qw9yUaSN6NjBbC65WFT/bUzHDuDnmq8XnnREN69WNpzby/i4+WfQd3qCyQ9nnNhu5lmLnm6hApLufHo18PbeOeB7hePlNvlzO0t0u38sSDt2i+ksfypQ/CASU1BBcCE5nUR3/b57xw87PBG9Qs6qg/kufh+Zs4sgERflhGiHDTstv4sEb465SRbRsWPCneWr73E6K5Q1s4iV56tcDPl1lJfCaDvahstlrYlf9KQjOrNfPN+pMPHL7TvK5kOJ6zuDBDZvxYPu7d1gc9htLnqbRRvCdZqIL87p4OINLdkAUiRsN3pPkMuRlGTINQuvEp+KLRR+reQj/AY9F0fULvLY29W+ZoIrUUXcY38Jea87AXXsdiQ1vmiRTficm8WVpmqNC28R/UWJxPeuwNiIryp8lT8amNVSVESl3mywQY1KL3c2I+2i9JUVl2yXdJkWfF6/Ut5Xmu0mVD+GOjnqTV2bvK4ml7W6FFLwj4RwyaXRXTvc1a95K0vToqxUZ22jtbbd5L9Kl977Xbr/Qn8AjYA3+S2+t9oAAAAASUVORK5CYII=" alt="" />
            <span>Tailwind CSS</span>
        </span>
    </div>
    <div className="flex flex-col justify-center items-center mt-16">
        <span className="font-Bungee text-2xl underline">Github Streak Statistics</span>
        <img className="mt-5 w-3/4" src="https://streak-stats.demolab.com/?user=premsharma1231" alt="Unable to Fetch Image" />
    </div>
    </div>

<div className="flex w-11/12">
    <div className="w-6/12 mt-28 mx-3 p-6 pl-16 pt-20 bg-white text-DarkColor rounded-md font-Karla font-bold relative">
        <h1 className="font-Bungee text-4xl absolute top-6 left-8 underline">Education</h1>
        <div className="flex flex-col text-left m-5 relative">
        <span className="absolute top-0 -left-10 w-5 h-5 bg-gray-700 rounded-full"></span>
        <span className="absolute top-0 -left-8 w-1 h-96 bg-gray-700"></span>
            <p className="flex"><img src="https://raw.githubusercontent.com/premsharma1231/LinksTOuse/refs/heads/main/calendar.png" className="h-6 mr-2" alt="" /> 2022 - 2025 (Pursuing)</p>
            <h1 className="text-xl text-black text-pretty py-2">Bachelor of Computer Application</h1>
            <p className="">Pacific University, Udaipur</p>
            <p className="">Result: 8.7 CGPA</p>
            <p className="">Secured top 3 rank in BCA Semester 2 at Pacific University.</p>
        </div>
        <div className="flex flex-col text-left m-5 relative">
        <span className="absolute top-0 -left-10 w-5 h-5 bg-gray-700 rounded-full"></span>
            <p className="flex"><img src="https://raw.githubusercontent.com/premsharma1231/LinksTOuse/refs/heads/main/calendar.png" className="h-6 mr-2" alt="" />2021 - 2022</p>
            <h1 className="text-xl text-black text-pretty py-2">Higher Secondary Education (12th Commerce)</h1>
            <p className="">Caravan English Medium School, Ahmedabad</p>
            <p className="">Result: 83.76% (94.12 Percentile)</p>
            <p className="">Secured 3rd rank in Caravan English Medium School.</p>
        </div>
        <div className="flex flex-col text-left m-5 relative">
        <span className="absolute top-0 -left-10 w-5 h-5 bg-gray-700 rounded-full"></span>
        <span className="absolute top-0 -left-8 w-1 h-full bg-gray-700"></span>
            <p className="flex"><img src="https://raw.githubusercontent.com/premsharma1231/LinksTOuse/refs/heads/main/calendar.png" className="h-6 mr-2" alt="" />2020 - 2021</p>
            <h1 className="text-xl text-black text-pretty py-2">Secondary Education (10th)</h1>
            <p className="">Caravan English Medium School, Ahmedabad</p>
            <p className="">Result: 42% (48.12 Percentile)</p>
            {/* <p>Secured top 3 rank in BCA Semester 2 at Pacific University.</p> */}
        </div>
    </div>
    <div className="w-6/12 mt-28 mx-3 p-6 pl-16 pt-20 bg-gray-300 rounded-md font-Karla font-bold relative">
        <h1 className="font-Bungee text-4xl absolute top-6 left-8 underline">Experience</h1>
        <div className="flex flex-col text-left m-5 relative">
        <span className="absolute top-0 -left-10 w-5 h-5 bg-gray-700 rounded-full"></span>
        <span className="absolute top-0 -left-8 w-1 h-96 bg-gray-700"></span>
            <p className="flex"><img src="https://raw.githubusercontent.com/premsharma1231/LinksTOuse/refs/heads/main/calendar.png" className="h-6 mr-2 " alt="" /> 1st January 2024 - 2025 (Running)</p>
            <p className="text-xl text-black text-pretty py-2">Trainer - Auditor - Quality Analyst - Resarch Analyst</p>
            <p className="text-black">ARCGATE Udaipur</p>
            <p className="">KPO/BPO Company</p>
            <p className="">I was recently promoted to the role of Trainer and Auditor.</p>
        </div>
        <div className="flex flex-col text-left m-5 relative">
        <span className="absolute top-0 -left-10 w-5 h-5 bg-gray-700 rounded-full"></span>
            <p className="flex"><img src="https://raw.githubusercontent.com/premsharma1231/LinksTOuse/refs/heads/main/calendar.png" className="h-6 mr-2" alt="" />September 2023 - November 2023</p>
            <h1 className="text-xl text-black text-pretty py-2">Delivery Boy</h1>
            {/* <p className="">Caravan English Medium School, Ahmedabad</p> */}
            <p className="text-black">Swiggy/Zomato</p>
            <p className="">In my first year of college, I worked as a delivery partner to cover my rent and college expenses, including tuition fees.</p>
        </div>
        <div className="flex flex-col text-left m-5 relative">
        <span className="absolute top-0 -left-10 w-5 h-5 bg-gray-700 rounded-full"></span>
        <span className="absolute top-0 -left-8 w-1 h-full bg-gray-700"></span>
            <p className="flex"><img src="https://raw.githubusercontent.com/premsharma1231/LinksTOuse/refs/heads/main/calendar.png" className="h-6 mr-2" alt="" />July 2023 - September 2023</p>
            <h1 className="text-xl text-black text-pretty py-2">CALL DE</h1>
            <p className="">Swiggy</p>
            <p className="">Previously, I worked as a Call DE, assisting delivery partners with their issues. Inspired by their work, I decided to join as a delivery partner for Swiggy and Zomato to earn more and create a better study schedule.</p>
            {/* <p>Secured top 3 rank in BCA Semester 2 at Pacific University.</p> */}
        </div>
    </div>
</div>

    </div>
    </>
)
}

export default About;