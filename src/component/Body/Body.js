import React from "react";
import Hero from "./hero/Hero";
import Booking from "./Booking/Booking";
import Hotels from "./Hotels/Hotels";
import OfferContents from "./OfferContents/offerContents";
import Rooms from "./Rooms/Rooms";
import Contact from "./Contact/Contact";

function getRooms() {
	var json = {
		rooms: [
			{
				id: 1,
				name: "Astro Hotel",
				price: "200",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_1.jpg"),
				imgAlt: "astro-hotel",
			},
			{
				id: 2,
				name: "Buoi Xuan Huan",
				price: "50",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_2.jpg"),
				imgAlt: "astro-hotel",
			},
			{
				id: 3,
				name: "Muong Thanh Hotel",
				price: "100",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_3.jpg"),
				imgAlt: "astro-hotel",
			},
			{
				id: 4,
				name: "Noor Hotel",
				price: "20",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_4.jpg"),
				imgAlt: "astro-hotel",
			},
			{
				id: 5,
				name: "Noor Hotel",
				price: "290",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_5.jpg"),
				imgAlt: "astro-hotel",
			},
			{
				id: 6,
				name: "Noor Hotel",
				price: "260",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_6.jpg"),
				imgAlt: "astro-hotel",
			},
			{
				id: 7,
				name: "Noor Hotel",
				price: "50",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_7.jpg"),
				imgAlt: "astro-hotel",
			},
			{
				id: 8,
				name: "Noor Hotel",
				price: "40",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_8.jpg"),
				imgAlt: "astro-hotel",
			},
			{
				id: 9,
				name: "Noor Hotel",
				price: "30",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_9.jpg"),
				imgAlt: "astro-hotel",
			},
			{
				id: 10,
				name: "Noor Hotel",
				price: "24",
				description: "Lorem Ipsum is simply dummy text of the printing.",
				imgSource: require("assets/images/room_10.jpg"),
				imgAlt: "astro-hotel",
			},
		],
	};
	return json;
}

const Body = ({ hotels, offers }) => {
	const listRooms = getRooms();

	return (
		<React.Fragment>
			<Hero />
			<Booking />
			<Hotels listHotels={hotels} />
			<OfferContents listOffers={offers} />
			<Rooms listRooms={listRooms} />
			<Contact />
		</React.Fragment>
	);
};

export default Body;
