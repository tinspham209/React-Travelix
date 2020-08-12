import React from "react";
import Hero from "./hero/Hero";
import Booking from "./Booking/Booking";
import Hotels from "./Hotels/Hotels";
import OfferContents from "./OfferContents/offerContents";
import Rooms from "./Rooms/Rooms";
import Contact from "./Contact/Contact";

function getOffers() {
	var json = {
		offers: [
			{
				id: 1,
				name: "Maldives Deluxe Package",
				rating: "4",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				discount: "40",
				imgSource: require("assets/images/maldives_deluxe_package_bg.jpg"),
			},
			{
				id: 2,
				name: "The paradise",
				rating: "4",
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				discount: "20",
				imgSource: require("assets/images/the_paradise_bg.jpg"),
			},
		],
	};
	return json;
}

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

const Body = ({ hotels }) => {
	const listOffers = getOffers();
	const listRooms = getRooms();

	return (
		<React.Fragment>
			<Hero />
			<Booking />
			<Hotels listHotels={hotels} />
			<OfferContents listOffers={listOffers} />
			<Rooms listRooms={listRooms} />
			<Contact />
		</React.Fragment>
	);
};

export default Body;
