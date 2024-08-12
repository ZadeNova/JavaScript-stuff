import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import SayHello from './Greeting.jsx'
import FoodList from './FoodList.jsx'
import FavouriteFood from './FavouriteFood.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavouriteFood/>
      <FoodList></FoodList>
   
  </React.StrictMode>,
)
