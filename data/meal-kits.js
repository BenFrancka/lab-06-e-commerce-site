
const enchiladas = {
    id: 'enchiladas',
    name: 'Chicken Enchiladas',
    image : 'enchiladas.png',
    description: 'Blue corn tortillas with pulled chicken, chile verde sauce, cotija cheese, and fresh cilantro',
    category: 'Mexican',
    price: 15.00,
    cost: 4.50
};

const spaghetti= {
    id: 'spaghetti',
    name: 'Spaghetti with Pork Meatballs',
    image : 'spaghetti-and-meatballs.png',
    description: 'Handmade spaghetti noodles with classic red sauce, pork meatball kit, fresh basil, and parmigiano reggiano',
    category: 'Italian',
    price: 18.00,
    cost: 5.50
};

const burger = {
    id: 'burger',
    name: 'Bison Cheeseburgers',
    image : 'cheeseburger.png',
    description: 'Grass fed bison patties with brioche buns, smoked gouda cheese, and quick pickle kit',
    category: 'American',
    price: 20.00,
    cost: 6.50
};

const ramen = {
    id: 'ramen',
    name: 'Spicy Shoyu Ramen',
    image : 'ramen.png',
    description: 'Gourmet Instant Ramen kit with pork belly, chili oil, and eggs',
    category: 'Japanese',
    price: 19.00,
    cost: 6.50
};

const sushi = {
    id: 'sushi',
    name: 'Spicy Tuna Rolls',
    image : 'sushi.png',
    description: 'Sushi rolling kit (includes bamboo mat), albacore belly tuna, rice, nori, hot sauce, black sesame seeds, scallions',
    category: 'Japanese',
    price: 35.00,
    cost: 9.50
};

const pizza = {
    id: 'pizza',
    name: 'Pepperoni Pizza',
    image : 'pizza.png',
    description: 'Detroit style deep dish pizza, includes dough kit, sauce, buffalo mozzarella, and aged pepperoni',
    category: 'American/Italian',
    price: 25.00,
    cost: 6.00
};

const tacos = {
    id: 'tacos',
    name: 'Veggie Tacos',
    image : 'tacos.png',
    description: 'Corn tortillas, fire-roasted salsa, zuchinni, nopalitos, mushrooms, lime, and fresh cilantro',
    category: 'Mexican',
    price: 18.50,
    cost: 5.75
};

const mealKits = [
    enchiladas, 
    spaghetti,
    burger,
    ramen,
    sushi,
    pizza,
    tacos
];

export default mealKits;
