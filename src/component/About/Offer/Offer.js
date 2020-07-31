import React from "react";
import offerContentImg from "assets/images/intro.png";
import { FaEllipsisH } from "react-icons/fa";

import "./Offer.css";

const Offer = () => {
  return (
    <div className="offer">
      <div className="container">
        <div className="offer__image">
          <img src={offerContentImg} alt="img-offer" />
        </div>
        <h5 className="offer__head">
          <span className="offer__head-title">We have the best tours</span>
        </h5>
        <p className="offer__head-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
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

export default Offer;
