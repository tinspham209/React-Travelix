import React from "react";
import Hero from "./hero/Hero";
import Booking from "./Booking/Booking";
import Hotels from "./Hotels/Hotels";

function getHotels() {
  var json = {
    hotels: [
      {
        id: 1,
        name: "Astro Hotel",
        price: "200",
        rating: "4.5",
        imgSource: require("assets/images/hotel_astro_resort.jpg"),
        imgAlt: "hotel-astro-resort",
      },
      {
        id: 2,
        name: "Enchanted Garden",
        price: "300",
        rating: "5",
        imgSource: require("assets/images/hotel_the_enchanted_garden.jpg"),
        imgAlt: "hotel-enchanted-garden",
      },
      {
        id: 3,
        name: "The paradise",
        price: "350",
        rating: "4",
        imgSource: require("assets/images/hotel_the_paradise.jpg"),
        imgAlt: "hotel-the-paradise",
      },
    ],
  };
  return json;
}

const Body = () => {
  const listHotels = getHotels();
  return (
    <div>
      <Hero />
      <Booking />
      <Hotels listHotels={listHotels} />
    </div>
  );
};

export default Body;
