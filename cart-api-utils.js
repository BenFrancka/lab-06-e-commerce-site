//import findById from utils.js (will need for addMealKit function)
import { findById } from './utils.js';

//declare a variable for the 'magic string'
const MEAL = 'MEAL';

//function for getting MEAL from Local Storage
function getCart() {

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

//create a function to set shopping cart in Local Storage
function setCart(userCart) {
    //take in a cart as a parameter
    //stringify said cart
    //set strigified cart to Local Storage
}

