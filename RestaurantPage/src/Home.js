import imgIceCream from './Images/IceCreamHomePage.jpeg'

function HomePage(){

    const homeDiv = document.createElement('div');
    homeDiv.className = "homeDiv";
    const contentDiv = document.getElementById('content');

    // Create Div for Image 
    const imgDiv = document.createElement('div');
    imgDiv.className = 'imgDiv';
    imgDiv.style.textAlign = 'center'
    homeDiv.append(imgDiv);

    // Add Image to Home + styling of img
    const img = document.createElement('img')
    img.style.objectFit = 'contain';
    
    img.src = imgIceCream
    imgDiv.append(img)

    // Add Paragraph Div + Paragraph
    const paraDiv = document.createElement('div');
    paraDiv.className = 'paraDiv';
    paraDiv.style.textAlign = 'center'
    homeDiv.append(paraDiv);

    // Create paragraph + append to paragraph div
    const homeParagraphContent = `Welcome to Zade's Ice Cream Shop.`
    paraDiv.append(homeParagraphContent);



    // Add Restaurant Review 
    const reviewDiv = document.createElement('div');
    reviewDiv.style.textAlign = 'center';
    reviewDiv.className = 'reviewDiv';

    const reviewParagraphContent = "Zade's Ice Cream offers an exceptional ice cream experience! With a wide variety of creamy, flavorful options and friendly staff, it's the perfect spot for a delightful treat. The charming ambiance and reasonable prices make it a must-visit for ice cream lovers. Highly recommended!"
    reviewDiv.append(reviewParagraphContent);
    homeDiv.append(reviewDiv);

    contentDiv.append(homeDiv);

}

export default HomePage