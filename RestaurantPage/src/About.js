import icecreamRestaurntPic from './Images/IceCreamRestaurant.jpeg';


function AboutPage(){



    const contentDiv = document.getElementById('content');
    const aboutDiv = document.createElement('div');
    aboutDiv.style.textAlign = 'center';
    // const restaurantPic = document.createElement('img')
    // restaurantPic.src = icecreamRestaurntPic;
    // aboutDiv.append(restaurantPic);
    aboutDiv.innerHTML = `<img src="${icecreamRestaurntPic}"><h1>About Zade's Ice Cream</h1><p>Welcome to  Zade's Ice Cream Parlor, your go-to destination for the finest and most delicious ice cream in town! We pride ourselves on using high-quality ingredients to craft our rich and creamy flavors. From classic favorites like vanilla and chocolate to unique creations like lavender honey, there's something for everyone to enjoy. Our friendly staff is dedicated to making your visit a delightful experience. Come and indulge in a sweet treat with us, and make every moment a little bit sweeter. Whether you're looking for a quick scoop or a place to gather with friends and family, Sweet Treats is the perfect spot. We can't wait to serve you!</p>`
    
    
    
    
    contentDiv.append(aboutDiv);




}


export default AboutPage;