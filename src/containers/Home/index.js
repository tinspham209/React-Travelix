import React, { useState, useEffect } from "react";
import Body from "../../component/Body/Body";
import Footer from "../../component/Footer/Footer";

import { getHotelsData, getOffersData } from "../../api/";

const Home = () => {
	const [hotels, setHotels] = useState();
	const [offers, setOffers] = useState();

	useEffect(() => {
		const getHotels = async () => {
			setHotels(await getHotelsData());
		};
		getHotels();
	}, []);

	useEffect(() => {
		const fetchAPI = async () => {
			Promise.all([await getHotelsData(), await getOffersData()]).then(
				(values) => {
					setHotels(values[0]);
					setOffers(values[1]);
				}
			);
		};
		fetchAPI();
	}, [setHotels, setOffers]);

	return (
		<div className="home">
			<Body hotels={hotels} offers={offers} />
			<Footer />
		</div>
	);
};

export default Home;
