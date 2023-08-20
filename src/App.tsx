import Header from "./components/global/Header/Header";
import StudentAdd from "./pages/StudentAdd/StudentAdd";
import StudentsList from "./pages/StudentsList/StudentsList";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<StudentsList />} />
				<Route path="/student-add" element={<StudentAdd />} />
			</Routes>
		</div>
	);
}

export default App;
