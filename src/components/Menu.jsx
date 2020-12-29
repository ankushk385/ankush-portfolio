import React from "react";

// import { useTransition, animated } from "react-spring";

function Menu() {
  return (
    <>
      <div className="nav">
        <div className="cirtext">
          <button>About Me</button>
          <div className="circle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="cirtext">
          <button>Services</button>
          <div className="circle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="cirtext">
          <button>Projects</button>
          <div className="circle">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
