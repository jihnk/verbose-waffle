// import { useState } from "react";
// import { TodoType } from "../../types/todo";
// import Detail from "../components/Detail";
import List from "../components/TodoList";

const Todo = () => {
	// const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
	return (
		<>
			<List />
			{/* <Detail selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} /> */}
		</>
	);
};
export default Todo;
