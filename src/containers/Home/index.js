import React, { useState, useEffect } from "react";
import Body from "../../component/Body/Body";
import Footer from "../../component/Footer/Footer";

import { getHotelsData, getOffersData, getRoomsData } from "../../api/";

const Home = () => {
	const [hotels, setHotels] = useState();
	const [offers, setOffers] = useState();
	const [rooms, setRooms] = useState();

	useEffect(() => {
		const fetchAPI = async () => {
			Promise.all([
				await getHotelsData(),
				await getOffersData(),
				await getRoomsData(),
			]).then((values) => {
				setHotels(values[0]);
				setOffers(values[1]);
				setRooms(values[2]);
			});
		};
		fetchAPI();
	}, [setHotels, setOffers, setRooms]);

	return (
		<div className="home">
			<Body hotels={hotels} offers={offers} rooms={rooms} />
			<Footer />
		</div>
	);
};

export default Home;
