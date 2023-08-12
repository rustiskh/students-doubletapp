// import logo from './logo.svg';
// import './App.css';
import Header from "./components/global/Header/Header";
import StudentsList from "./pages/StudentsList/StudentsList";
import "./scss/main.scss";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<StudentsList />} />
			</Routes>
		</div>
	);
}

export default App;
