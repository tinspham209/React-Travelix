import React from "react";
import Hero from "./hero/Hero";
import Booking from "./Booking/Booking";
import Hotels from "./Hotels/Hotels";
import OfferContents from "./OfferContents/offerContents";
import Rooms from "./Rooms/Rooms";
import Contact from "./Contact/Contact";

const Body = ({ hotels, offers, rooms }) => {
	return (
		<React.Fragment>
			<Hero />
			<Booking />
			<Hotels listHotels={hotels} />
			<OfferContents listOffers={offers} />
			<Rooms listRooms={rooms} />
			<Contact />
		</React.Fragment>
	);
};

export default Body;
