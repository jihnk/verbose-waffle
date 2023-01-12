import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { TodoType } from "../../types/todo";
import { getTodos } from "../api/todo";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const List = () => {
	const { isLoading, isError, data, error } = useQuery<
		{ data: TodoType[] },
		AxiosError
	>("todos", getTodos);

	if (isLoading) return <span>로딩중!</span>;
	if (isError) return <span>에러! {error.message}</span>;

	return (
		<div>
			<h1>To Do List</h1>
			<TodoForm />
			{data?.data.map((todo: TodoType) => (
				<TodoItem todo={todo} key={todo.id} />
			))}
		</div>
	);
};
export default List;
