//Data
import mealKits from '../data/meal-kits.js';

//function to access quanity data
import { findById, calcItemTotal } from '../utils.js';

/*function renders shopping cart items on the cart page based user input
from button add-item  buttons on product page.*/
export function renderCartItem(cartItem) {

    //accesses necessary data
    const dinnerOrder = findById(mealKits, cartItem.id);

    //creates DOM elements for cart table
    const tr = document.createElement('tr');
    const mealTd = document.createElement('td');
    const amountTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    //pulls name data from MealKits
    mealTd.textContent = dinnerOrder.name;

    //pulls amount data from cartItems
    amountTd.textContent = cartItem.amount;

    //pulls price data from mealKits
    priceTd.textContent = `$${dinnerOrder.price.toFixed(2)}`;

    //creates a total
    const total = calcItemTotal(cartItem.amount, dinnerOrder.price);

    //pulls total data and adds to totalTd
    totalTd.textContent = `$${total.toFixed(2)}`;
    totalTd.classList.add('total-column');

    //appends all the tds to the tr
    tr.append(mealTd, amountTd, priceTd, totalTd);

    //returns tr so it displays
    return tr;
}

