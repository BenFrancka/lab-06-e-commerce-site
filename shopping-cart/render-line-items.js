//Data
import mealKits from '../data/meal-kits.js';
//imports getCart function to get cart from local storage
//import { getCart } from '../cart-api-utils.js';

//function to access quanity data
import { findById, calcItemTotal } from '../utils.js';

//replaces static cart data with variable that calls cart from local storage


export function renderCartItem(cartItem) {

    //access necessary data
    const dinnerOrder = findById(mealKits, cartItem.id);

    //create DOM elements for cart table
    const tr = document.createElement('tr');
    const mealTd = document.createElement('td');
    const amountTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    //pull name data from MealKits
    mealTd.textContent = dinnerOrder.name;

    //pull quantity data from cartItems
    amountTd.textContent = cartItem.amount;

    //pull price data from mealKits
    priceTd.textContent = `$${dinnerOrder.price.toFixed(2)}`;

    //create a total
    const total = calcItemTotal(cartItem.amount, dinnerOrder.price);

    //pull total data and add to totalTd
    totalTd.textContent = `$${total.toFixed(2)}`;
    totalTd.classList.add('total-column');

    //append all the tds to the tr
    tr.append(mealTd, amountTd, priceTd, totalTd);

    //return tr so it displays
    return tr;
    
}

