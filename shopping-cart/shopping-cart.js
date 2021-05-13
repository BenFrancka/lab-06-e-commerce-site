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

//grabs order button from HTML
const orderButton = document.querySelector('#place-order-button');

//disable button if no items are in the cart
if (cartItems.length === 0) {
    orderButton.disabled = true;    
}

//creates event listener for order button
orderButton.addEventListener('click', () => {
    
    //alert with contents of the cart
    const checkoutAlert = JSON.stringify(cartItems, true, 2);
    alert(`Your Meal Cart contains ${checkoutAlert}`);

    //removes cart from local storage
    alert('Place Your Order?');
    localStorage.clear();
    location.reload();
    
    //redirect user to homepage
    alert('Return to Home Page');
    window.location.href = "../index.html";
    
});



