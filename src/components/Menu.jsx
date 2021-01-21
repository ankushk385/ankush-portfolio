import React, { useState } from "react";
import "./css/Menu.css";
// import { ReactComponent as ServicesIcon } from "./images/services.svg";
// import { ReactComponent as AboutIcon } from "./images/about.svg";
// import { ReactComponent as ProjectsIcon } from "./images/projects.svg";
// import { ReactComponent as ContactIcon } from "./images/contact.svg";
function Menu() {
  return <></>;
}
function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </>
  );
}

function NavItem(props) {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <li className="nav-item">
        <button className="icon-button" onClick={() => setMenu(!menu)}>
          {props.icon}
        </button>
        {menu && props.children}
      </li>
    </>
  );
}

function DropdownMenu() {
  function DropdownMenuItems(props) {
    return (
      <>
        <div className="menu-buttons">
          <button href="#" className="menu-item">
            {/* <span className="icon-button">{props.abouticon}</span> */}
            {props.about}
          </button>
          <button href="#" className="menu-item">
            {/* <span className="icon-button">{props.servicesicon}</span> */}
            {props.services}
          </button>
          <button href="#" className="menu-item">
            {/* <span className="icon-button">{props.projectsicon}</span> */}
            {props.projects}
          </button>
          <button href="#" className="menu-item">
            {/* <span className="icon-button">{props.contacticon}</span> */}
            {props.contact}
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="dropmenu">
      <DropdownMenuItems
        about="About me"
        contact="Contact Me"
        services="Services"
        projects="My Projects"
        // abouticon={<AboutIcon />}
        // servicesicon={<ServicesIcon />}
        // projectsicon={<ProjectsIcon />}
        // contacticon={<ContactIcon />}
      ></DropdownMenuItems>
    </div>
  );
}
export { Navbar, NavItem, DropdownMenu };
export default Menu;
