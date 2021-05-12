//imports addItemToCart function for use in add to cart button click event
import { addItemToCart } from '../cart-api-utils.js';

export function renderMealKit(mealKit) {
   
    //creates the li
    const li = document.createElement('li');
    li.classList.add(mealKit.category);
    li.title = mealKit.description;

    //adds name of dish to li
    const h3 = document.createElement('h3');
    h3.textContent = mealKit.name;
    h3.style.textDecoration = 'underline';
    li.appendChild(h3);

    //adds type of cuisine to li
    const categoryP = document.createElement('p');
    categoryP.classList.add('cuisine-type');
    categoryP.textContent = `Cusuine Type: ${mealKit.category}`;
    li.appendChild(categoryP);

    //adds dish image to li
    const img = document.createElement('img');
    img.src = `../assets/${mealKit.image}`;
    img.alt = `${mealKit.name} image`;
    li.appendChild(img);

    //adds dish description to li
    const descriptionP = document.createElement('p');
    descriptionP.classList.add('description');
    descriptionP.textContent = `${mealKit.description}`;
    li.append(descriptionP);

    //adds dish price to li
    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `Price: $${mealKit.price.toFixed(2)}`;

    //adds "add to cart" button to li
    const btn = document.createElement('button');
    btn.classList.add('add-to-cart-button');
    btn.textContent = 'Add to Cart';
    btn.value = `${mealKit.id}`;
    p.append(btn);
    li.append(p);

    //adds event listener to add clicked meal kit to cart
    btn.addEventListener('click', () =>{
        //call addItemToCart with mealKit.id to store in cart
        addItemToCart(mealKit.id);
    });
    
    return li;
}