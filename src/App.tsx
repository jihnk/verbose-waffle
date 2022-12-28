import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Todo from "./pages/Todo";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth" element={<Main />}></Route>
				<Route path="/todo" element={<Todo />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
