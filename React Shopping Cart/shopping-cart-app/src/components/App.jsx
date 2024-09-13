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
import { FooterWithSocialLinks } from "./footer";
import TheShoppingCart from "./shoppingCart";

function App() {
	//const [count, setCount] = useState(0)

	// Plans for the shopping cart app.
	// Have routers for different pages/components to render.
	// Home page will have the theme of the shop. ( example dc images for dc products)
	// Add a nav bar for the users to navigate.
	// Shopping cart will exist throughout all pages.
	// Have a shopping cart page


	// ToDo List from 9/9/2024

	// Make a the individual product page for each product.
	// Start coding the shopping cart logic

	const [ShoppingCartStatus, set_ShoppingCartStatus] = useState(false)
	

	const click_open_ShoppingCart = () => {
		set_ShoppingCartStatus(true);
	}

	const click_closeShoppingCart = () => {
		set_ShoppingCartStatus(false);	

	}


	// Write Shopping Cart logic here

	const [cartList , set_cartList] = useState([1,2,3,4,5]);

	const addItemToCart = (item) => {
		set_cartList(...cartList,item)
	}

	const removeItemFromCart = (itemID) => {
		set_cartList(cartList.filter((item) => item.id !== itemID));
	}


	return (
		<>
			<NavigationBar openCart={click_open_ShoppingCart}></NavigationBar>
			<TheShoppingCart CloseCart={click_closeShoppingCart} OpenCart={set_ShoppingCartStatus} cartStatus={ShoppingCartStatus}></TheShoppingCart>

			{/* <TheShoppingCart></TheShoppingCart> */}
			<Outlet thedata={cartList} />
			<FooterWithSocialLinks></FooterWithSocialLinks>
		</>
	);
}

export default {App};
