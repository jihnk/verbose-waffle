import { useState } from "react";
import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { createTodo } from "../api/todo";
import { TodoRequestType, TodoType } from "../../types/todo";

const TodoForm = () => {
	const queryClient = useQueryClient();

	const { mutate, isLoading, isError, error } = useMutation<
		{ data: TodoType },
		AxiosError,
		TodoRequestType
	>(createTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries("todos");
		},
	});

	const [inputs, setInputs] = useState({
		title: "",
		content: "",
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const addTodoItem = () => {
		mutate(inputs);
		setInputs({ title: "", content: "" });
	};

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodoItem();
	};

	if (isLoading) return <span>로딩중!</span>;
	if (isError) return <span>에러! {error.message}</span>;

	return (
		<>
			<form>
				<input
					type="string"
					name="title"
					placeholder="제목"
					value={inputs.title}
					onChange={onChange}
				/>
				<input
					type="string"
					name="content"
					placeholder="내용"
					value={inputs.content}
					onChange={onChange}
				/>
				<button type="button" onClick={onSubmit}>
					추가하기
				</button>
			</form>
		</>
	);
};
export default TodoForm;
