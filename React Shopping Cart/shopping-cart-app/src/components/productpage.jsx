import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "./App";

export default function DisplayIndividualProduct() {
	const { productID } = useParams();

	// Using context provider
	const { addItem } = useContext(MyContext);

	const [productDisplayed, setproductDisplayed] = useState(null);

	// quantity of items to add
	const [productpurchaseQuantity, set_productpurchaseQuantity] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://fakestoreapi.com/products/${productID}`
				);
				const data = await response.json();
				setproductDisplayed(data);
			} catch (error) {
				console.error(error.message);
			}
		};

		fetchData();
	}, [productID]);

	if (!productDisplayed) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<div className="grid grid-cols-2 flex justify-around bg-center bg-contain bg-no-repeat w-full">
				<div className="w-2/4 m-auto mb-16 mt-16">
					<img src={productDisplayed.image}></img>
				</div>

				<div>
					<div className="m-auto mb-4 mt-16">
						<h5 className="text-2xl font-bold dark:text-black">
							{productDisplayed.title}
						</h5>
					</div>
					<div className="m-auto mb-6">
						<h5 className="text-2x1 font-bold">${productDisplayed.price}</h5>
					</div>
					<div className="">
						<p>{productDisplayed.description}</p>
					</div>
					<div className="mt-10 ">
						<button
							type="button"
							className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-1/2"
							onClick={() => addItem(productDisplayed, productpurchaseQuantity)}
						>
							Add to Cart
						</button>

						{/* { Below is the quantity button} */}

						<label
							htmlFor="quantity-input"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Choose quantity:
						</label>
						<div className="relative flex items-center max-w-[8rem]">
							<button
								type="button"
								id="decrement-button"
								onClick={() =>
									set_productpurchaseQuantity(productpurchaseQuantity - 1)
								}
								className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
							>
								<svg
									className="w-3 h-3 text-gray-900 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 2"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M1 1h16"
									/>
								</svg>
							</button>
							<input
								type="text"
								id="quantity-input"
								data-input-counter
								aria-describedby="helper-text-explanation"
								className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="1"
								value={productpurchaseQuantity}
								onChange={(e) =>
									set_productpurchaseQuantity(parseInt(e.target.value))
								}
								required
							/>
							<button
								type="button"
								id="increment-button"
								onClick={() =>
									set_productpurchaseQuantity(productpurchaseQuantity + 1)
								}
								className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
							>
								<svg
									className="w-3 h-3 text-gray-900 dark:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 18"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 1v16M1 9h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
