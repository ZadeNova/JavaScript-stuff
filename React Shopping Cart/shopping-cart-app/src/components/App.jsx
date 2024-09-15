import { useState } from "react";
import { createContext } from "react";

import "../css/App.css";
import NavigationBar from "./navbar";
import { Outlet } from "react-router-dom";

import { FooterWithSocialLinks } from "./footer";
import TheShoppingCart from "./shoppingCart";

export const MyContext = createContext();

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

	// ToDo list for 15/9/2024
	// add a back button for individual product page x
	// add remove in shopping cart logic [ done ]
	// add how much items u can remove in shopping cart logic
	// after that project should be complete?

	const [ShoppingCartStatus, set_ShoppingCartStatus] = useState(false);

	const click_open_ShoppingCart = () => {
		set_ShoppingCartStatus(true);
	};

	const click_closeShoppingCart = () => {
		set_ShoppingCartStatus(false);
	};

	// Write Shopping Cart logic here
	// Add count on individual page to add multiple of the same products.
	// Find a way to display the amount of the same products.
	// Find a way to display all items from cartList onto sidenav shopping Cart.

	const [cartList, set_cartList] = useState([]);

	const addItemToCart = (item, num) => {
		// Refer to gemini. Problem is that the code below is accessing the previous state. Ensure that it accesses the latest state.

		set_cartList((cartList) => {
			const existingItem = cartList.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				return cartList.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity_items: cartItem.quantity_items + num }
						: cartItem
				);
			} else {
				return [...cartList, { ...item, quantity_items: num }];
			}
		});
	};

	const removeItemFromCart = (itemID) => {
		set_cartList(cartList.filter((item) => item.id !== itemID));
	};

	const shoppingCartFunctions = {
		shoppingcartList: cartList,
		addItem: addItemToCart,
		deleteItem: removeItemFromCart,
	};

	return (
		<>
			<MyContext.Provider value={shoppingCartFunctions}>
				<NavigationBar openCart={click_open_ShoppingCart}></NavigationBar>
				<TheShoppingCart
					CloseCart={click_closeShoppingCart}
					OpenCart={set_ShoppingCartStatus}
					cartStatus={ShoppingCartStatus}
				></TheShoppingCart>

				{/* <TheShoppingCart></TheShoppingCart> */}
				<Outlet />
				<FooterWithSocialLinks></FooterWithSocialLinks>
			</MyContext.Provider>
		</>
	);
}

export default App;
