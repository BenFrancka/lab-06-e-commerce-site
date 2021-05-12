import { calcOrderTotal } from '../utils.js';
import { renderCartItem } from '../shopping-cart/render-line-items.js';
import cartItems from '../data/cart.js';

const anchor = document.querySelector('tbody');
const total = document.querySelector('#cart-total');

for (let item of cartItems) {

    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const cartTotal = calcOrderTotal();

total.textContent = `Grand Total: $${cartTotal.toFixed(2)}`;
total.classList.add('total-display');