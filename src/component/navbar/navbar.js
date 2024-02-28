import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
// import Image from "../image/image";
import { FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import Hamburger from "../hamburger/hamburger";
import Button from '../button/button'
export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Upcoming Event",
      url: "/event",
    },
    {
      title: "Artist",
      url: "/artist",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  const showNavbar = () => {
    setIsBurgerClicked(true);
  };

  const hideNavbar = (index) => {
    if (index === 2) {
      setIsBurgerClicked(true);
    } else {
      setIsBurgerClicked(false);
    }
  };

  const toggle = () => {
    if (isHovered) {
      setIsHovered(false)
    } else {
      setIsHovered(true)
    }
  }

  return (
    <nav>
      <div className="nav-image">
        <NavLink to="/">
          {/* <Image
          source={require("../../assets/WeatherCast_-_logo-removebg-preview.png")}
          width={"120px"}
          height={"120px"}
        /> */}
          'Home'
        </NavLink>
      </div>

      <div className="nav-links">
        <ul className={isBurgerClicked ? "nav_menu_close " : "nav_menu_open"}>
          {menuItems.map((item, index) => (
            <li key={index} className={isHovered ? "hovered" : ""}>
              <NavLink
                to={item.url}
                className="nav-link"
                onClick={() => hideNavbar(index)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-socials">
        <Button btnTitle={"BOOK TICKETS"} />
      </div>

      <Hamburger Click={isBurgerClicked ? hideNavbar : showNavbar} open={isBurgerClicked} />
    </nav>
  );
}
