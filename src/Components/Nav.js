import React from "react";
import "../App.css";
import "../index.css";
import Switch from "./Darkmode";

function Navbar(){
  return(

    <>
    <div className="flex justify-between px-4 py-4">
    <li className="text-2xl ml-16 list-none">
          <a className="text-white active font-kanit" aria-current="page" href="#">MY PORTFOLIO</a>
    </li>
      <div className="flex font-bold">
        <li className="list-none m-2">
          <a className="text-white active font-kanit" aria-current="page" href="#">HOME</a>
        </li>
        <li className="list-none m-2">
          <a className="text-white active font-kanit" aria-current="page" href="#">ABOUT</a>
        </li>
        <li className="list-none m-2">
          <a className="text-white active font-kanit" aria-current="page" href="#">RESUME</a>
        </li>
        <li className="list-none m-2">
          <a className="text-white active font-kanit" aria-current="page" href="#">PROJECTS</a>
        </li>
        <li className="list-none m-2">
          <a className="text-white active font-kanit" aria-current="page" href="#">LET'S TALK?</a>
        </li>
      </div>
      
    <div>
    <Switch />
    </div>

    </div>
    </>
)
}


export default Navbar;