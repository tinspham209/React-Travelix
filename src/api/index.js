import axios from "axios";

const url = "http://localhost:5000";

export const getHotelsData = async () => {
	try {
		const { data } = await axios.get(`${url}/hotels`);
		return data;
	} catch (error) {
		console.log("error getHotels ", error.message);
	}
};

export const getOffersData = async () => {
	try {
		const { data } = await axios.get(`${url}/offers`);
		return data;
	} catch (error) {
		console.log("error getOffers ", error.message);
	}
};

export const getRoomsData = async () => {
	try {
		const { data } = await axios.get(`${url}/rooms`);
		console.log("dataRooms", data);
		return data;
	} catch (error) {
		console.log("error getRooms ", error.message);
	}
};
