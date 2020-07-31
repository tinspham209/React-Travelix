import logoImg from "assets/images/logo.png";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTripadvisor,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-brand">
            <a href="index.html" className="logo-image">
              <img src={logoImg} alt="logo" />
            </a>
            <div className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
              convallis tortor. Suspendisse potenti. In faucibus massa arcu,
              vitae cursus mi hendrerit nec.
            </div>
          </div>
          <div className="social-media-wrap">
            <h4 className="footer-heading">Follow us</h4>
            <div className="social-media">
              <a href="index.html" className="sm-link">
                <span className="sm-link-icon">
                  <FaTwitter />
                </span>
              </a>
              <a href="index.html" className="sm-link">
                <span className="sm-link-icon">
                  <FaFacebook />
                </span>
              </a>
              <a href="index.html" className="sm-link">
                <span className="sm-link-icon">
                  <FaInstagram />
                </span>
              </a>
              <a href="index.html" className="sm-link">
                <span className="sm-link-icon">
                  <FaTripadvisor />
                </span>
              </a>
              <a href="index.html" className="sm-link">
                <span className="sm-link-icon">
                  <FaPinterest />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
