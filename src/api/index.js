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
