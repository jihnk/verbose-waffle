import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TodoType } from "../../types/todo";
import { getTodoById } from "../api/todo";

interface DetailPropsTyped {
	selectedTodo: TodoType | null;
	setSelectedTodo: Dispatch<SetStateAction<TodoType | null>>;
}

const Detail = ({ selectedTodo, setSelectedTodo }: DetailPropsTyped) => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get("id");

	const getTodoDetail = useCallback(async () => {
		const result = await getTodoById(id as string);
		setSelectedTodo(result.data);
	}, [id, setSelectedTodo]);

	useEffect(() => {
		getTodoDetail();
	}, [getTodoDetail, id]);

	const { title, content, updatedAt } = selectedTodo as TodoType;

	return selectedTodo ? (
		<div>
			<h1>{title}</h1>
			<p>{content}</p>
			<p>{updatedAt}</p>
		</div>
	) : (
		<></>
	);
};
export default Detail;
