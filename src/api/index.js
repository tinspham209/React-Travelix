import axios from "axios";

const url = "http://localhost:5000";

export const getHotelsData = async () => {
	try {
		const { data } = await axios.get(`${url}/hotels`);
		console.log("url", url + "/hotels");
		console.log("data", data);
		return data;
	} catch (error) {
		console.log(error.message, "error getHotels");
	}
};
