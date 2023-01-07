import { useState } from "react";
import { createTodo } from "../api/todo";

const TodoForm = () => {
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
		createTodo(inputs);
		setInputs({ title: "", content: "" });
	};

	const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodoItem();
	};

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
