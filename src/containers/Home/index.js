import React, { useState, useEffect } from "react";
import Body from "../../component/Body/Body";
import Footer from "../../component/Footer/Footer";

import { getHotelsData } from "../../api/";

const Home = () => {
	const [hotels, setHotels] = useState();

	useEffect(() => {
		const getHotels = async () => {
			setHotels(await getHotelsData());
		};
		getHotels();
	}, []);

	return (
		<div className="home">
			<Body hotels={hotels} />
			<Footer />
		</div>
	);
};

export default Home;
