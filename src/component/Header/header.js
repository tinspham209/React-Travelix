import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../../assets/images/logo.png";
import Navigation from "./navigation/navigation";
import { useMediaQuery } from "react-responsive";
import "./header.css";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1000 });
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  // useEffect(() => {
  //   isDesktopOrLaptop ? setToggleMenu(true) : setToggleMenu(false);
  // }, [isDesktopOrLaptop]);

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
            style={{
              opacity: toggleMenu ? "1" : "0",
              transform: toggleMenu ? "scale(1)" : "scale(0)",
            }}
          >
            <Navigation href="index.html" name="Home" />
            <Navigation href="#" name="About" />
            <Navigation href="#" name="Offers" />
            <Navigation href="#" name="News" />
            <Navigation href="#" name="Contact" />
          </ul>
          {/* {isDesktopOrLaptop ? (
            <ul
              className="nav-list"
              style={{
                opacity: "1",
              }}
            >
              <Navigation href="index.html" name="Home" />
              <Navigation href="#" name="About" />
              <Navigation href="#" name="Offers" />
              <Navigation href="#" name="News" />
              <Navigation href="#" name="Contact" />
            </ul>
          ) : (
            <ul
              className="nav-list"
              style={{
                opacity: toggleMenu ? "1" : "0",
                transform: toggleMenu ? "scale(1)" : "scale(0)",
              }}
            >
              <Navigation href="index.html" name="Home" />
              <Navigation href="#" name="About" />
              <Navigation href="#" name="Offers" />
              <Navigation href="#" name="News" />
              <Navigation href="#" name="Contact" />
            </ul>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
