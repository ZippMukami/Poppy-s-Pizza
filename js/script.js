let carts = document.querySelectorAll(".add-cart");

let products = [{
        name: "small",
        tag: "small pizza",
        price: 500,
        inCart: 0
    },

    {
        name: "medium",
        tag: "medium pizza",
        price: 1000,
        inCart: 0
    },

    {
        name: "large",
        tag: "large pizza",
        price: 1500,
        inCart: 0
    },

    {
        name: "cheese",
        tag: "cheese toppings",
        price: 200,
        inCart: 0
    },

    {
        name: "olive",
        tag: "olive toppings",
        price: 200,
        inCart: 0
    },

    {
        name: "pepperoni",
        tag: "pepperoni toppings",
        price: 200,
        inCart: 0
    },

    {
        name: "thin",
        tag: "thin Crust",
        price: 200,
        inCart: 0
    },

    {
        name: "thick",
        tag: "thick Crust",
        price: 200,
        inCart: 0
    },

    {
        name: "crispy",
        tag: "crispy Crust",
        price: 200,
        inCart: 0
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function () {
        cartNumber(products[i]);
         totalCost(products[i]);
    })
};

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumber(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    };
    setItems(product);
};

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;

        cartItems = {
            [product.tag]: product
        }

    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);
    console.log("The product price is", product.price);
    localStorage.setItem("totalCost", product.price);
};

onLoadCartNumbers();