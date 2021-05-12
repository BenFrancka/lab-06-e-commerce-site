import { calcOrderTotal } from '../utils.js';
import { renderCartItem } from '../shopping-cart/render-line-items.js';

//imports getCart funciton to replace static cart data
import { getCart } from '../cart-api-utils.js';

const anchor = document.querySelector('tbody');
const total = document.querySelector('#cart-total');

//defines cartItems as the cart from local storage
const cartItems = getCart();

for (let item of cartItems) {

    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const cartTotal = calcOrderTotal();

total.textContent = `Grand Total: $${cartTotal.toFixed(2)}`;
total.classList.add('total-display');