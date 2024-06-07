import strawberryIceCream from './Images/StrawberryIceCream.jpeg';
import vanillaIceCream from './Images/VanillaIceCream.jpeg';
import chocolateIceCream from './Images/ChocolateIceCream.jpeg';


function MenuPage(){

    const contentDiv = document.getElementById('content');

    const menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv';
    menuDiv.style.textAlign = 'center';

    let productArray = [
        {
            productImg: chocolateIceCream,
            iceCreamName: 'Chocolate Ice Cream',
            price: '$5',
            description: 'Its chocolate ice cream'
        },
        {
            productImg: vanillaIceCream,
            iceCreamName: 'Vanilla Ice Cream',
            price: '$4',
            description: 'Classic vanilla ice cream made with real vanilla beans'
        },
        {
            productImg: strawberryIceCream,
            iceCreamName: 'Strawberry Ice Cream',
            price: '$5',
            description: 'Fresh strawberry ice cream with chunks of real strawberries'
        }]


    // Add Product Card
    for (let i = 0; i < productArray.length; i++){

        const productDiv = document.createElement('div');
        const productCardDiv = document.createElement('div');
        productCardDiv.innerHTML = `<img src="${productArray[i].productImg}"><h1>${productArray[i].iceCreamName}</h1><p class="price">${productArray[i].price}</p><p>${productArray[i].description}</p>`

        productDiv.append(productCardDiv);
        menuDiv.append(productCardDiv);
        
    }


    contentDiv.append(menuDiv);


}





export default MenuPage;
