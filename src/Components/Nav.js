import React from "react";
import "../App.css";
import "../index.css";
import Switch from "./Darkmode";
import "@fontsource/rubik-vinyl"; 
import "@fontsource/karla";

function Navbar(){
  return(

    <>
    <div className="flex justify-between bg-DarkColor px-4 py-4">
    <li className="text-4xl ml-16 list-none">
          <a className="text-white active font-kanit" aria-current="page" href="#">Purvish</a>
    </li>
      <div className="flex font-bold">
        <li className="text-lg list-none m-2">
          <a className="text-white active font-Karla" aria-current="page" href="#">HOME</a>
        </li>
        <li className="text-lg list-none m-2">
          <a className="text-white active font-Karla" aria-current="page" href="#">ABOUT</a>
        </li>
        <li className="text-lg list-none m-2">
          <a className="text-white active font-Karla" aria-current="page" href="#">RESUME</a>
        </li>
        <li className="text-lg list-none m-2">
          <a className="text-white active font-Karla" aria-current="page" href="#">PROJECTS</a>
        </li>
        <li className="text-lg list-none m-2">
          <a className="text-white active font-Karla" aria-current="page" href="#">LET'S TALK?</a>
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