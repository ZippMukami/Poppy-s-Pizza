let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i + 1) {
    carts[i].addEventListener(click, function () {
        cartNumber(products[i]);
        totalCost(products[i]);
    })
};


function cartNumber(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

   
};