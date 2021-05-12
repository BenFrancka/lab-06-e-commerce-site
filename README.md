## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.


## Plan for implementing Dynamic Shopping Cart
1) create function to get cart from Local storage. Function will need to:
    - get stringified cart from local storage
    - parse said cart into a real array
    - check if cart exists to begin with:
        -if cart exists, return cart
        -if not, return empty array (creates a new cart)

2) create a function to set the cart in Local Storage. Function will need to:
    - take in a cart as a parameter
    - stringify said cart
    - set strigified cart to Local Storage

3) create function that adds items to the cart. Function will need to:
    - take in a cart item id as a parameter
    - call the get cart from local storage function to get the cart
    - check if cart item id is already in the cart with findById function
        - if the id is already in the cart, increment that item's amount by 1
        - if the id is not already in the cart:
            - create a new cart item object with a quantity of 1
            - push new cart item object to the cart.
    - call function to set the cart to local storage to update the cart.

4) replace static cart items with a variable = to calling the function to get the cart from local storage.

5) add an event listen to render-meal-kits.js that calls the function to add items to the cart.

6) format place order button underneath cart:
    - disable button if no items are in the cart
    - create event listener:
        - displays an alert with contents of the cart
        - removes the cart from local storage
        - redirects user to the home page

