import React from "react";
import "../App.css";
import "../index.css";

function Navbar(){
  return(

    <>
    <div className="flex justify-between px-4 py-4">
    <li className="text-2xl ml-16 list-none">
          <a className="active" aria-current="page" href="#">MY PORTFOLIO</a>
    </li>
      <div className="flex">
        <li className="list-none m-2">
          <a className="active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="list-none m-2">
          <a className="active" aria-current="page" href="#">ABOUT</a>
        </li>
        <li className="list-none m-2">
          <a className="active" aria-current="page" href="#">RESUME</a>
        </li>
        <li className="list-none m-2">
          <a className="active" aria-current="page" href="#">PROJECTS</a>
        </li>
        <li className="list-none m-2">
          <a className="active" aria-current="page" href="#">LET'S TALK?</a>
        </li>
      </div>
      <div className="flex form-switch">
        <input className="mr-2 form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
      </div>
    </div>
    </>
)
}


export default Navbar;