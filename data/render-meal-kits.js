export function renderMealKit(mealKit) {
    /*<ul>
        <li>
            <h3>Enchiladas</h3>
        </li>
        <li>
            <img class= "product-image" src="../assets/enchiladas.png" alt= "enchiladas">
        </li>
        <li>
           <p class= "cuisine-type">
               Cuisine: Mexican
           </p> 
        </li>
        <li>
            <p>
                Cost: $15
            </p>
            <button>Add To Cart</button>
        </li>

    </ul>*/
    const li = document.createElement('li');
    li.classList.add(mealKit.category);
    li.title = mealKit.description;

    const h3 = document.createElement('h3');
    h3.textContent = mealKit.name;
    h3.style.textDecoration = 'underline';
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${mealKit.image}`;
    img.alt = `${mealKit.name} image`;
    li.appendChild(img);

    const descriptionP = document.createElement('p');
    descriptionP.classList.add('description');
    descriptionP.textContent = `${mealKit.description}`;
    li.append(descriptionP);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `Price: $${mealKit.price.toFixed(2)}`;

    const btn = document.createElement('button');
    btn.textContent = 'Add to Cart';
    btn.value = `${mealKit.id}`;
    p.append(btn);
    li.append(p);
    return li;
}