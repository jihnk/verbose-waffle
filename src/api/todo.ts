import axios from "axios";
import { TodoRequestType, TodoUpdateType } from "./../../types/todo";

const baseUrl = "http://localhost:8080";

const getTodos = async () => {
	try {
		const { data } = await axios.get(`${baseUrl}/todos`, {
			headers: { authorization: localStorage.getItem("token") },
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};

const getTodoById = async (id: string) => {
	try {
		const { data, status } = await axios.get(`${baseUrl}/todos/${id}`, {
			headers: { authorization: localStorage.getItem("token") },
		});
		if (status === 200) {
			return data;
		}
	} catch (error) {
		console.log(error);
	}
};

const createTodo = async (requestData: TodoRequestType) => {
	try {
		const { data } = await axios.post(`${baseUrl}/todos`, requestData, {
			headers: { authorization: localStorage.getItem("token") },
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};

const updateTodo = async ({ inputs, id }: TodoUpdateType) => {
	try {
		const { data } = await axios.put(`${baseUrl}/todos/${id}`, inputs, {
			headers: { authorization: localStorage.getItem("token") },
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};

const deleteTodo = async (id: string) => {
	try {
		const { data } = await axios.delete(`${baseUrl}/todos/${id}`, {
			headers: { authorization: localStorage.getItem("token") },
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};

export { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };
