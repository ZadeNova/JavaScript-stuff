import App from "./App";
import Home from "./home";
import ShopPage from "./shoppage";
import ErrorPage from "./errorpage";
import { Navigate } from "react-router-dom";
import DisplayIndividualProduct from "./productpage";

const routes = [
	{
		path: "/",
		element: <App />, // App includes Navbar and the main layout
		errorElement: <ErrorPage />,
		children: [
			// Redirect from "/" to "/Home"
			{ path: "/", element: <Navigate to="/Home" /> },
			{ path: "/Home", element: <Home /> },
			{ path: "/ShopPage", element: <ShopPage /> },
			{path: "/product/:productID", element: <DisplayIndividualProduct/>}
		],
	},
];

export default routes;
