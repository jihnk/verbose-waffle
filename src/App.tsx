import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth" element={<Auth />} />
				<Route path="/todo" element={<Todo />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
