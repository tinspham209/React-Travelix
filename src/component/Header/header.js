import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../../assets/images/logo.png";
import Navigation from "./navigation/navigation";
import { useMediaQuery } from "react-responsive";
import "./header.css";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const isDesktop = useMediaQuery({ minDeviceWidth: 1000 });
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="index.html" className="logo">
            <img src={logoImg} alt="logo" />
          </a>
          <div className="hamburger-menu">
            <span onClick={handleClick}>
              {toggleMenu ? <FaTimes /> : <FaBars />}
            </span>
          </div>

          <ul
            className="nav-list"
            style={
              isDesktop
                ? { opacity: "1" }
                : {
                    opacity: toggleMenu ? "1" : "0",
                    transform: toggleMenu ? "scale(1)" : "scale(0)",
                  }
            }
          >
            <Navigation href="/home" name="Home" />
            <Navigation href="/about" name="About" />
            <Navigation href="/offers" name="Offers" />
            <Navigation href="/news" name="News" />
            <Navigation href="/contact" name="Contact" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
