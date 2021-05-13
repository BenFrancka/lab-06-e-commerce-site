import mealKits from './data/meal-kits.js';

//imports getCart to get cart from Local Storage
import { getCart } from './cart-api-utils.js';

export function findById(someArray, id) {
    for (let item of someArray) {
        if (id === item.id){
            return item;
        }
    }
    return null;
}

export function calcItemTotal(quantity, price) {

    const total = quantity * price;
    
    return total;
}

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