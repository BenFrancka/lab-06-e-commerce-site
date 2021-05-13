//imports addItemToCart function for use in add to cart button click event
import { addItemToCart } from '../cart-api-utils.js';

export function renderMealKit(mealKit) {
   
    //creates DOM elements for the products list
    const li = document.createElement('li');
    const nameH3 = document.createElement('h3');
    const categoryP = document.createElement('p');
    const img = document.createElement('img');
    const descriptionP = document.createElement('p');
    const priceP = document.createElement('p');
    const btn = document.createElement('button');

    
    li.classList.add(mealKit.category);
    li.title = mealKit.description;

    //adds name of dish to nameH3
    nameH3.textContent = mealKit.name;
    nameH3.style.textDecoration = 'underline';

    //adds type of cuisine to categoryP
    categoryP.classList.add('cuisine-type');
    categoryP.textContent = `Cusuine Type: ${mealKit.category}`;

    //adds dish image to img
    img.src = `../assets/${mealKit.image}`;
    img.alt = `${mealKit.name} image`;

    //adds dish description to descriptionP
    descriptionP.classList.add('description');
    descriptionP.textContent = `${mealKit.description}`;

    //adds price to priceP
    priceP.classList.add('price');
    priceP.textContent = `Price: $${mealKit.price.toFixed(2)}`;

    //adds add-to-cart-button details to btn
    btn.classList.add('add-to-cart-button');
    btn.textContent = 'Add to Cart';
    btn.value = `${mealKit.id}`;

    //appends button to priceP
    priceP.append(btn);
    //appends meal kit items to products list
    li.append(nameH3, categoryP, img, descriptionP, priceP);

    //adds event listener to add clicked meal kit to cart
    btn.addEventListener('click', () =>{
        //call addItemToCart with mealKit.id to store in cart
        addItemToCart(mealKit.id);
    });
    
    //generates the li elements for the products list
    return li;
}