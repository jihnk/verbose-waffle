import { AxiosError } from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { TodoType, TodoUpdateType } from "../../types/todo";
import { deleteTodo, updateTodo } from "../api/todo";

interface TodoItemProps {
	todo: TodoType;
}

const TodoItem = ({ todo }: TodoItemProps) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const deleteTodoItem = useMutation<{ data: null }, AxiosError, string>(
		deleteTodo,
		{
			onSuccess: () => {
				queryClient.invalidateQueries("todos");
			},
		}
	);

	const updateTodoItem = useMutation<
		{ data: TodoType },
		AxiosError,
		TodoUpdateType
	>(updateTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries("todos");
		},
	});

	const [inputs, setInputs] = useState({
		title: todo.title,
		content: todo.content,
	});

	const [isEdit, setIsEdit] = useState(false);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const { id, title, content } = todo;

	return (
		<>
			<div key={id}>
				{isEdit ? (
					<>
						<input
							value={inputs.title}
							onChange={onChange}
							name="title"
						></input>
						<input
							value={inputs.content}
							onChange={onChange}
							name="content"
						></input>
					</>
				) : (
					<span
						onClick={() => {
							navigate(`/?id=${id}`);
						}}
					>
						<span>{title}</span>
						<span>{content}</span>
					</span>
				)}
				<button
					onClick={() => {
						setIsEdit(!isEdit);
						if (isEdit) {
							updateTodoItem.mutate({ inputs, id });
						}
					}}
				>
					수정
				</button>
				<button onClick={() => deleteTodoItem.mutate(id)}>삭제</button>
			</div>
		</>
	);
};
export default TodoItem;
