import React from "react";
import "./Hotels.css";
import Hotel from "./Hotel/Hotel";
import Spinner from "../../UI/Spinner/Spinner";

const Hotels = (props) => {
	const { listHotels } = props;

	let listHotelsRender = <Spinner />;
	if (listHotels) {
		listHotelsRender = (
			<React.Fragment>
				{listHotels.hotels.map((hotel) => {
					return (
						<div className="grid-item featured-hotels" key={hotel._id}>
							<Hotel
								key={hotel._id}
								imgSource={hotel.imgSource}
								imgAlt={hotel.imgAlt}
								hotelName={hotel.name}
								hotelPrice={hotel.price}
								hotelRating={hotel.rating}
							/>
						</div>
					);
				})}
			</React.Fragment>
		);
	}

	return (
		<section className="hotels">
			<div className="container">
				<h5 className="section-head">
					<span className="heading">Explore</span>
					<span className="sub-heading">Our beautiful hotels</span>
				</h5>
				<div className="grid">{listHotelsRender}</div>
			</div>
		</section>
	);
};

export default Hotels;
