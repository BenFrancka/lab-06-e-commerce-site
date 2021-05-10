import mealKits from './meal-kits.js';
import { renderMealKit } from './render-meal-kits.js';

//declares the ul 
const ul = document.getElementById('meal-kit');

//generates li based on mealKits and renderMealKit and appends to the ul
for (const mealKit of mealKits) {
    const element = renderMealKit(mealKit);
    ul.appendChild(element);
}