//import findById from utils.js (will need for addMealKit function)
import { findById } from './utils.js';

//declare a variable for the 'magic string'
const MEAL = 'MEAL';

//function for getting MEAL from Local Storage and return it to an array
export function getCart() {

    //gets stringified MEAL from local storage
    const cartString = localStorage.getItem(MEAL);

    //Parses MEAL into an array
    const cartParsed = JSON.parse(cartString);

    //check if cart exists to begin with:
    if (cartParsed) {
        //if cart exists, return cart
        return cartParsed;
    } else {
        //if not, return empty array (creates a new cart)
        return [];
    } 
}

//function to set MEAL in Local Storage and stringify its array
export function setCart(userCart) { //takes in a cart as a parameter
    
    //stringify said cart as a variable
    const cartString = JSON.stringify(userCart);
    //set strigified cart to Local Storage
    localStorage.setItem(MEAL, cartString);
}

//function that adds items to the shopping cart
export function addItemToCart(mealId) { //takes in a product id as a parameter

    //call the get cart from local storage function to get the cart, store as variable
    const shoppingCart = getCart();
    //check if mealId is already in the cart with findById function, store as variable
    const meal = findById(shoppingCart, mealId);

    //check if the meal is already in the shopping cart 
    if (meal) {
        //if so, increment that item's amount by 1
        meal.amount++;
    } else { //if the id is not already in the cart:
        //create a new cart item object with a quantity of 1
        const newMeal = {
            id: mealId,
            amount: 1,
        };

        //push new cart item object to the shopping cart.
        shoppingCart.push(newMeal);
    }
    
    //call function to set the cart to local storage to update the cart
    setCart(shoppingCart);
}

export function clearCart() {
    localStorage.clear();
    location.reload();
}