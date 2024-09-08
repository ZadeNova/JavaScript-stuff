import { useState } from "react";

import "../css/App.css";
import Home from "./home";
import NavigationBar from "./navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Outlet,
} from "react-router-dom";

import ShopPage from "./shoppage";

function App() {
	//const [count, setCount] = useState(0)

	// Plans for the shopping cart app.
	// Have routers for different pages/components to render.
	// Home page will have the theme of the shop. ( example dc images for dc products)
	// Add a nav bar for the users to navigate.
	// Shopping cart will exist throughout all pages.
	// Have a shopping cart page

	return (
		<>
			<NavigationBar></NavigationBar>

			<Outlet />
		</>
	);
}

export default App;
