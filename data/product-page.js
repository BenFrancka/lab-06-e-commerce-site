import mealKits from './meal-kits.js';
import { renderMealKit } from './render-meal-kits.js';

const ul = document.getElementById('meal-kit');

for (const mealKit of mealKits) {
    const element = renderMealKit(mealKit);
    ul.appendChild(element);
}