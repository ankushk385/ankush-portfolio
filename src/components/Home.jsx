import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";
import { Navbar, NavItem, DropdownMenu } from "./Menu";
import Page3 from "./Page3";
import Page4 from "./Page4";
import logo from "./images/logo2.gif";
import frontEnd from "./images/frontEnd2.gif";
import backEnd from "./images/backEnd2.gif";

import uiux from "./images/uiux2.gif";
import { ReactComponent as MenuIcon } from "./images/menuicon.svg";

function Home() {
  // const [toggle, setToggle] = useState(true);
  const [isToggle, setIsToggle] = useState(true);

  // const color = useSpring({
  //   position: isToggle ? "relative" : "relative",
  // });
  const height = useSpring({
    // height: isToggle ? "7px" : "300px",
    // width: isToggle ? "0%" : "100%",
    // display: isToggle ? "flex" : "flex",
    // flexDirection: isToggle ? "row" : "row",
    // justifyContent: isToggle ? "space-between" : "space-between",
    // padding: isToggle ? "0px" : "35px",
    // border: isToggle ? "0px solid black" : "2px solid black",
    // opacity: isToggle ? "0" : "1",
    // overflow: isToggle ? "hidden" : "hidden",
    marginTop: isToggle ? "50px" : " 256px",
    // marginBottom: isToggle ? "100px" : " 15px",
    // background: isToggle
    //   ? "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)"
    //   : "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
    // boxShadow: isToggle
    //   ? "0px 0px 0px rgba(0, 0, 0, 0.5)"
    //   : "10px 12px 13px rgba(0, 0, 0, 0.5)",
  });

  // const fade = useSpring({
  //   // backgroundImage: isToggle
  //   //   ? "linear-gradient(to right, #00dbde 0%, #ff0066 100%)"
  //   //   : "linear-gradient(to right, #434343 0%, black 100%)",
  //   // width: isToggle ? "10%" : "100%",
  //   // marginTop: isToggle ? "2px" : " 6px",
  //   // color: isToggle ? "black" : "white",
  // });

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          <div className="page1" data-aos="fade-in">
            <div className="logo">
              <h1 id="logoText">अंकुश की प्रोफाइल</h1>
              <button id="helloBtn">Say Hi!</button>
            </div>

            <Navbar>
              <NavItem
                icon={<MenuIcon onClick={() => setIsToggle(!isToggle)} />}
              >
                <DropdownMenu />
              </NavItem>
            </Navbar>

            <animated.div className="intro" style={height}>
              <h1>Hi my name is Ankush welcome to my website</h1>
              <h5>
                I design and code beautifully simple things, and I love what I
                do.
              </h5>
              <img
                className="intoImg"
                src={logo}
                height="300px"
                width="300px"
                alt="...."
              />
            </animated.div>
          </div>
          <div className="page2">
            <div className="page2Text" data-aos="zoom-in">
              <h1>These Are The Services I Provide</h1>

              <h5>
                Since beginning my journey as a freelance designer nearly 10
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </h5>
            </div>

            <div className="page2Table">
              <div className="frontEnd">
                <img
                  data-aos="slide-right"
                  src={frontEnd}
                  alt=""
                  height="230px"
                  width="230px"
                />
                <h5>Front-End</h5>
                <p>
                  I'm quietly confident, naturally curious, and perpetually
                  working on improving my chops one design problem at a time
                </p>
                <h5>Tools I Use</h5>
                <ul className="toolList">
                  <li>React Js</li>
                  <li>Css/Scss</li>

                  <li>Bootstrap/Material Ui</li>
                </ul>
              </div>
              <div className="uiux">
                <img
                  src={uiux}
                  alt=""
                  height="230px"
                  width="230px"
                  data-aos="slide-up"
                />
                <h5>UI/UX</h5>
                <p>
                  I'm quietly confident, naturally curious, and perpetually
                  working on improving my chops one design problem at a time
                </p>
                <h5>Tools I Use</h5>

                <ul class="toolList">
                  <li>Abode Xd</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                </ul>
              </div>
              <div className="backEnd">
                <img
                  data-aos="slide-left"
                  src={backEnd}
                  alt=""
                  height="230px"
                  width="230px"
                />
                <h5>Back-End</h5>
                <p>
                  I'm quietly confident, naturally curious, and perpetually
                  working on improving my chops one design problem at a time
                </p>
                <h5>Tools I Use</h5>
                <ul className="toolList">
                  <li>Node Js</li>
                  <li>Express Js</li>
                  <li>Mongo Db(Database)</li>
                </ul>
              </div>
            </div>
          </div>

          <Page3 />

          <Page4 />
        </div>
      </div>
    </>
  );
}
export default Home;
