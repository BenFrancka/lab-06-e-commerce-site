import mealKits from './data/meal-kits.js';

//imports getCart to get cart from Local Storage
import { getCart } from './cart-api-utils.js';

//function that loops through an array and find an item by item's id if present
export function findById(someArray, id) {
    for (let item of someArray) {
        if (id === item.id){
            return item;
        }
    }
    return null;
}

//function that calculates total price for one cart item
export function calcItemTotal(quantity, price) {

    const total = quantity * price;
    
    return total;
}

//function that calculates total price for entire cart
export function calcOrderTotal() {
    let accumulator = 0;

    //sets cartItems as cart data from Local Storage
    const cartItems = getCart();

    for (let item of cartItems) {
        const mealKit = findById(mealKits, item.id);

        const total = item.amount * mealKit.price;

        accumulator = accumulator + total;
    }

    return accumulator;
}