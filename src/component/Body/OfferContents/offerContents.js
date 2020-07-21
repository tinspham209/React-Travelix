import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import OfferContent from "./OfferContent/OfferContent";
import "./offerContents.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const OfferContents = (props) => {
  const { listOffers } = props;
  const [index, setIndex] = useState(0);

  //change background

  return (
    <section className="offer">
      <div className="container">
        <AutoPlaySwipeableViews index={index} onChangeIndex={setIndex}>
          {listOffers.offers.map((offer) => {
            return (
              <OfferContent
                key={offer.id}
                hotelName={offer.name}
                hotelRating={offer.rating}
                description={offer.description}
                discount={offer.discount}
                imgSource={offer.imgSource}
                dots={listOffers.offers.length}
                index={index}
                onChangeIndex={setIndex}
              />
            );
          })}
        </AutoPlaySwipeableViews>
      </div>
    </section>
  );
};

export default OfferContents;
