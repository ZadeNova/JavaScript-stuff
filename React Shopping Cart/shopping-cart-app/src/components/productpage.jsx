import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function DisplayIndividualProduct({thedata}) {

    const { productID } = useParams()
    console.log(thedata);

    const [productDisplayed , setproductDisplayed] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
                const data = await response.json();
                setproductDisplayed(data);
            }
            catch(error) {
                console.error('Error fetching product data.')
            }


        }
       
        fetchData();
    },[productID])

    console.log(productDisplayed)

    if (!productDisplayed){
        return <div>Loading...</div>
    }
    return (<>

            
            <div className="grid grid-cols-2 flex justify-around bg-center bg-contain bg-no-repeat w-full">
                <div className="w-2/4 m-auto mb-16 mt-16"><img src={productDisplayed.image}></img></div>

                <div>
                    <div className="m-auto mb-4 mt-16">
                        <h5 className="text-2xl font-bold dark:text-black">{productDisplayed.title}</h5>
                    </div>
                    <div className="m-auto mb-6"><h5 className="text-2x1 font-bold">${productDisplayed.price}</h5>
                    </div>
                    <div className="">
                        <p>{productDisplayed.description}</p>
                        
                    </div>
                    <div className="mt-10 ">
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-1/2" onClick="">Add to Cart</button>

                    </div>
                    


                </div>
            
            
            
            
            </div>
    </>)
}

