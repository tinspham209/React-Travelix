import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import "./Hotel.css";

const Hotel = (props) => {
  const { imgSource, imgAlt, hotelName, hotelPrice, hotelRating } = props;

  return (
    <React.Fragment>
      <img src={imgSource} alt={imgAlt} className="hotel-image" />
      <h5 className="hotel-name">{hotelName}</h5>
      <span className="hotel-price">From ${hotelPrice}/Night</span>
      <div className="hotel-rating">
        <StarRatings
          rating={Number(hotelRating)}
          starRatedColor="rgb(250, 158, 44)"
          numberOfStars={5}
          name="rating"
          starDimension="18px"
          starSpacing="2px"
        />
      </div>
      <a
        href="https://github.com/tinspham209/React-Travelix"
        className="btn btn-gradient"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book now
        <span className="dots">
          <FaEllipsisH />
        </span>
      </a>
    </React.Fragment>
  );
};

export default Hotel;
