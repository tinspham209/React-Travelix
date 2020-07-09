import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="main-heading">
          <h1 className="title">Discover</h1>
          <h2 className="subtitle">Luxury hotels</h2>
        </div>
        <a
          href="https://github.com/tinspham209/React-Travelix"
          className="btn btn-gradient"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore now
          <span className="dots">
            <FaEllipsisH />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
