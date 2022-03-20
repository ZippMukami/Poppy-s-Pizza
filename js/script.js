let carts = document.querySelectorAll(".add-cart");

let products= [
    {
        name   : "small",
        tag    : "small pizza",
        price  : 500,
        inCart : 0
    },

    {
        name   : "medium",
        tag    : "medium pizza",
        price  : 1000,
        inCart : 0
    },

    {
        name   : "large",
        tag    : "large pizza",
        price  : 1500,
        inCart : 0
    },

    {
        name   : "cheese",
        tag    : "cheese toppings",
        price  : 200,
        inCart : 0
    },

    {
        name   : "olive",
        tag    : "olive toppings",
        price  : 200,
        inCart : 0
    },

    {
        name   : "pepperoni",
        tag    : "pepperoni toppings",
        price  : 200,
        inCart : 0
    },

    {
        name   : "thin",
        tag    : "thin Crust",
        price  : 200,
        inCart : 0
    },

    {
        name   : "thick",
        tag    : "thick Crust",
        price  : 200,
        inCart : 0
    },

    {
        name   : "crispy",
        tag    : "crispy Crust",
        price  : 200,
        inCart : 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function () {
         cartNumber(products[i]);
        //  totalCost(products[i]);
    })
};


function cartNumber(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    localStorage.setItem('cartNumbers')


};