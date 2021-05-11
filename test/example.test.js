// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById} from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


// Data to test findById function
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
    sushi,
    pizza,
    tacos
];

//findById function test for expected
test('takes in mealKits array and tacos id, returns tacos item', (expect) => {

    const expected = tacos;

    const actual = findById(mealKits, 'tacos');

    expect.deepEqual(actual, expected);
});

//finbyId test for null
test('takes in mealKits array and tacos id, returns tacos item', (expect) => {

    const expected = null;

    const actual = findById(mealKits, 'burritos');

    expect.deepEqual(actual, expected);
});

