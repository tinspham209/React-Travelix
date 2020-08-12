import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import OfferContent from "./OfferContent/OfferContent";
import "./offerContents.css";
import Spinner from "../../UI/Spinner/Spinner";

const OfferContents = (props) => {
	const { listOffers } = props;
	const [index, setIndex] = useState(0);

	// const changeBackgroundImage = (index) => {
	//   let str = `url(${listOffers.offers[index].imgSource})`;
	//   return str;
	// };

	let settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
	};

	let offersContentRender = <Spinner />;
	if (listOffers) {
		offersContentRender = (
			<React.Fragment>
				<Slider {...settings}>
					{listOffers.offers.map((offer) => {
						return (
							<OfferContent
								key={offer._id}
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
				</Slider>
			</React.Fragment>
		);
	}

	return (
		<section
			className="offer"
			// style={{
			//   backgroundImage: changeBackgroundImage(index),
			// }}
		>
			<div className="container">{offersContentRender}</div>
		</section>
	);
};

export default OfferContents;
