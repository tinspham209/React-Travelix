import React from "react";
import StarRatings from "react-star-ratings";
import { FaEllipsisH } from "react-icons/fa";
import Pagination from "component/Pagination/Pagination";

import "./OfferContent.css";

const OfferContent = (props) => {
  const { discount, hotelName, hotelRating, description } = props;
  return (
    <div className="offer-content">
      <div className="discount">{Number(discount)}% off</div>
      <h5 className="hotel-name">{hotelName}</h5>
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
      <p className="paragraph">{description}</p>
      <a
        href="https://github.com/tinspham209/React-Travelix"
        className="btn btn-gradient"
        target="_blank"
        rel="noopener noreferrer"
      >
        Redeem offer
        <span className="dots">
          <FaEllipsisH />
        </span>
      </a>
      <Pagination
        dots={props.dots}
        index={props.index}
        onChangeIndex={props.onChangeIndex}
      />
    </div>
  );
};

export default OfferContent;
