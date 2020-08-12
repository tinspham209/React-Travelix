import React from "react";
import Hero from "component/About/hero/Hero";
import OfferContent from "component/About/Offer/Offer";
import Footer from "../../component/Footer/Footer";

const About = () => {
	return (
		<div className="about">
			<Hero />
			<OfferContent />
			<Footer />
		</div>
	);
};

export default About;
