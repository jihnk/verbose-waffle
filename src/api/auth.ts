import axios from "axios";
import { SignInType } from "./../../types/auth";

const baseUrl = "http://localhost:8080";

const signup = async (requestData: SignInType) => {
	try {
		const { data, status } = await axios.post(
			`${baseUrl}/users/create`,
			requestData
		);
		if (status === 200) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

const login = async (requestData: SignInType) => {
	try {
		const { data, status } = await axios.post(
			`${baseUrl}/users/login`,
			requestData
		);
		if (status === 200) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

export { signup, login };
