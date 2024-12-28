let productsGrid = document.getElementById('products-grid');
let productsArray = []
let url = 'https://market-0936.restdb.io/rest'

fetch(url + '/products')
.then(async function (response) {
    let products = await response.json();
    productsGrid.innerHTML = null;
    products.forEach(p => {
        productsArray.push(p);
        let pElem = document.createElement('div');
        pElem.classList.add('product');
        pElem.innerHTML = `
        <h2 class='product-name'>${p.name}</h2>
        <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
        <p class='product-price'><b>Price: </b>${p.price}$</p>
        <a href= 'userProfile.html?id=${p.author_id}'>Seller profile</a>
        <button>Buy<button>
        `;
        productsGrid.append(pElem);
    });
})