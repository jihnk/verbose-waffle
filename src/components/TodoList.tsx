import { useEffect, useState } from "react";
import { TodoType } from "../../types/todo";
import { getTodos } from "../api/todo";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const List = () => {
	const [todos, setTodos] = useState([]);

	const getTodoList = async () => {
		const result = await getTodos();
		setTodos(result.data);
	};

	useEffect(() => {
		getTodoList();
	}, [todos]);

	return (
		<div>
			<h1>To Do List</h1>
			<TodoForm />
			{todos.map((todo: TodoType) => (
				<TodoItem todo={todo} key={todo.id} />
			))}
		</div>
	);
};
export default List;
