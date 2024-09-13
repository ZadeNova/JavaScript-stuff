import { useEffect } from "react";
import { useState } from "react";
import Display_productList from "./productList";


export default function ShopPage() {
	
	// Write API call here for product data

	const [productsList , set_ProductsList] = useState([]);
	
	useEffect(() => {

		fetch('https://fakestoreapi.com/products').then((response) => {if (response.status >= 400){
			throw new Error("Server Error")
		}
		return response.json();
	}).then((response) => set_ProductsList(response));


	},[])
	
	return (
		<>
			{console.log(productsList)}
			<Display_productList
			theproductList={productsList}
			/>
		</>
	);
}
