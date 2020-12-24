import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";
import logo from "./images/logo.gif";
import frontEnd from "./images/frontEnd.gif";
import backEnd from "./images/backEnd.gif";
import uiux from "./images/uiux.gif";

// import { NavLink } from "react-router-dom";
function Home() {
  const [toggle, setToggle] = useState(true);
  const [isToggle, setIsToggle] = useState(true);

  const height = useSpring({
    height: isToggle ? "1px" : "300px",
    // border: isToggle ? "0px solid black" : "5px solid black",
    // opacity: isToggle ? "0" : "1",
    margin: isToggle ? "30px" : " 40px",
    backgroundColor: isToggle ? "black" : "purple",
    boxShadow: isToggle
      ? "0px 0px 0px rgba(0, 0, 0, 0.5)"
      : "10px 12px 13px rgba(0, 0, 0, 0.5)",
  });

  const fade = useSpring({
    // opacity: toggle ? 1 : 0.5,

    color: toggle ? "purple" : "white",
    fontSize: toggle ? "2rem" : "8em",
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [fullName, setFullName] = useState({
    fName: "",
    email: "",
  });

  const typedValue = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((previousValue) => {
      if (name === "fName") {
        return {
          fName: value,
          email: previousValue.email,
        };
      } else if (name === "email") {
        return { email: value, fName: previousValue.fName };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(fullName.fName);
    console.log(fullName.email);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          <div className="page1">
            <div className="logo">
              <animated.h1 id="logoText" style={fade}>
                Ankush's Profile
              </animated.h1>
              <button id="helloBtn" onClick={() => setToggle(!toggle)}>
                Say Hi!
              </button>
            </div>

            {/* <div className="dropdown">
              <ul className="menu">
                <li>
                  Menu
                  <ul className="sub-menu">
                    <li>
                      <NavLink to=""> About Me </NavLink>
                    </li>
                    <li>
                      <NavLink to=""> Services </NavLink>
                    </li>
                    <li>
                      <NavLink to=""> Projects </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact"> Contact Me </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div> */}

            <div className="btnMenu">
              <button
                className="springBtn"
                id="helloBtn"
                onClick={() => setIsToggle(!isToggle)}
              >
                MENU
              </button>
              <animated.div style={height}></animated.div>
            </div>

            <div className="intro">
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
            </div>
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
                {" "}
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
                  <li>Css</li>
                  <li>Scss</li>
                  <li>Bootstrap</li>
                  <li>Material Ui</li>
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
          <div className="page3">
            <div className="projector"></div>
          </div>
          <div className="page4" data-aos="slide-up">
            <div>
              <div className="form">
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name </label>
                    <input
                      type="text"
                      className="form-control"
                      name="fName"
                      onChange={typedValue}
                      value={fullName.fName}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={typedValue}
                      value={fullName.email}
                    />
                  </div>

                  <div className="form-floating">
                    <textarea
                      className="txtArea"
                      placeholder="Enter Your Message Here"
                      name="message"
                    ></textarea>
                  </div>
                  <button type="submit" className="submitBtn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
