import React, { useState, useCallback } from "react";
// import { useTransition, animated } from "react-spring";

function Menu() {
  return (
    <>
      <div className="nav">
        <div>
          <button>Services</button>
        </div>
        <div>
          <button>Projects</button>
        </div>
        <div>
          <button>Contact Me</button>
        </div>
      </div>
    </>
  );
}
export default Menu;
