import React from "react";
// import bg1 from "./images/bg1.jpg";
// import bg2 from "./images/bg2.jpg";
// import { useTransition, animated } from "react-spring";

function Menu() {
  return (
    <>
      <div className="nav">
        <div>
          <div className="menuImage"></div>
          <button className="menuButton">About Me</button>
        </div>
        <div>
          <button className="menuButton">Services</button>
          <div className="circle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <div className="menuImage"></div>
          <button className="menuButton">Projects</button>
        </div>
      </div>
    </>
  );
}
export default Menu;
