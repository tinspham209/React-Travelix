import React from "react";
import imgTraveler from "assets/images/traveler.png";
import "./Contact.css";

const Contact = (props) => {
  return (
    <section className="contact">
      <div className="container">
        <h5 className="section-head">
          <span className="heading">Contact</span>
          <span className="sub-heading">Get in touch with us</span>
        </h5>
        <div className="contact-content">
          <div className="traveler-wrap">
            <img src={imgTraveler} alt="img-traveler" />
          </div>
          <form action="" className="form contact-form">
            <div className="input-group-wrap">
              <div className="input-group">
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />
                <span className="bar"></span>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <span className="bar"></span>
              </div>
            </div>

            <div class="input-group">
              <input
                type="text"
                className="input"
                placeholder="Subject"
                required
              />
              <span className="bar"></span>
            </div>
            <div className="input-group">
              <textarea
                className="input"
                cols="30"
                rows="8"
                placeholder="E-mail"
              ></textarea>
              <span className="bar"></span>
            </div>
            <button className="btn form-btn btn-purple" type="submit">
              Send Message
              <span className="dots">
                <i className="fas fa-ellipsis-h"></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
