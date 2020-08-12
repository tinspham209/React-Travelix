import React from "react";
import Room from "./Room/Room";
import "./Rooms.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "../../UI/Spinner/Spinner";

const Rooms = (props) => {
	const { listRooms } = props;
	let settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	let roomsRender = <Spinner />;
	if (listRooms) {
		roomsRender = (
			<React.Fragment>
				<Slider {...settings}>
					{listRooms.rooms.map((room) => {
						return (
							<Room
								key={room._id}
								roomName={room.name}
								roomPrice={room.price}
								roomDescription={room.description}
								imgSource={room.imgSource}
								imgAlt={room.imgAlt}
							/>
						);
					})}
				</Slider>
			</React.Fragment>
		);
	}

	return (
		<section className="rooms">
			<div className="container">
				<h5 className="section-head">
					<span className="heading">the best offers with rooms</span>
				</h5>
				<div className="rooms-grid">{roomsRender}</div>
			</div>
		</section>
	);
};

export default Rooms;
