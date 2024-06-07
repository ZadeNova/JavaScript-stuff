import restaurantPage from "./RestaurantPage"
import * as css from './styles/main.css'
import HomePage from "./Home.js";
import MenuPage from "./Menu.js";
import AboutPage from "./About.js";


// Add Event Listeners to buttons
const homeBtn = document.getElementById('Home');
const MenuBtn = document.getElementById('Menu');
const AboutBtn = document.getElementById('About');
homeBtn.addEventListener('click',switchPage);
MenuBtn.addEventListener('click',switchPage);
AboutBtn.addEventListener('click',switchPage);

function switchPage(){
    
    const contentDiv = document.getElementById('content');
    

    if (this.id === 'Home'){
        console.log('Hello')
        contentDiv.innerHTML = ''
        HomePage();

    }
    else if (this.id === 'Menu'){
        contentDiv.innerHTML = ''
        MenuPage();

    }
    else if (this.id === 'About'){
        contentDiv.innerHTML = ''
        AboutPage();
    }


}




