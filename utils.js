import mealKits from  './data/meal-kits';
import cartItems from './data/cart';

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

    for (let item of cartItems) {
        const mealKit = findById(mealKits, item.id);

        const total = item.quantity * mealKit.price;

        accumulator = accumulator + total;
    }

    return accumulator;
}