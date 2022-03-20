let carts = document.querySelectorAll(".add-cart");

let products= [
    {
        name   : "small",
        tag    : "small pizza",
        price  : 500,
        inCart : 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function () {
        console.log("cart");
         cartNumber(products[i]);
         totalCost(products[i]);
    })
};


function cartNumber(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);


};