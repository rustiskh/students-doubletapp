import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./redux/store";

const rootElem = document.getElementById("root");

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem);
	root.render(
		<Provider store={setupStore()}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
}
