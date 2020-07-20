import React from "react";
import "./Hotels.css";
import Hotel from "./Hotel/Hotel";

const Hotels = (props) => {
  const { listHotels } = props;

  return (
    <section className="hotels">
      <div className="container">
        <h5 className="section-head">
          <span className="heading">Explore</span>
          <span className="sub-heading">Our beautiful hotels</span>
        </h5>
        <div className="grid">
          {listHotels.hotels.map((hotel) => {
            return (
              <div className="grid-item featured-hotels" key={hotel.id}>
                <Hotel
                  key={hotel.id}
                  imgSource={hotel.imgSource}
                  imgAlt={hotel.imgAlt}
                  hotelName={hotel.name}
                  hotelPrice={hotel.price}
                  hotelRating={hotel.rating}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
