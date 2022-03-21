let carts = document.querySelectorAll(".add-cart");

let products = [{
        name: "small",
        tag: "small pizza",
        image: "small.jpeg",
        price: 500,
        inCart: 0
    },

    {
        name: "medium",
        tag: "medium pizza",
        image: "large.jpeg",

        price: 1000,
        inCart: 0
    },

    {
        name: "large",
        tag: "large pizza",
        image: "large3.jpeg",

        price: 1500,
        inCart: 0
    },

    {
        name: "cheese",
        tag: "cheese toppings",
        image: "cheese.jpeg",

        price: 200,
        inCart: 0
    },

    {
        name: "olive",
        tag: "olive toppings",
        image: "olive.jpeg",

        price: 200,
        inCart: 0
    },

    {
        name: "pepperoni",
        tag: "pepperoni toppings",
        image: "pepperoni.jpeg",
        price: 200,
        inCart: 0
    },

    {
        name: "thin",
        tag: "thin Crust",
        image: "cheese.jpeg",
        price: 200,
        inCart: 0
    },

    {
        name: "thick",
        tag: "thick Crust",
        image: "olive.jpeg",

        price: 200,
        inCart: 0
    },

    {
        name: "crispy",
        tag: "crispy Crust",
        image: "pepperoni.jpeg",

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

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

    console.log("The product price is", product.price);
};

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('totalCost');

    //     if (cartItems && productContainer) {
    //         productContainer.innerHTML = " ";
    //         Object.values(cartItems).map(item => {
    //             productContainer.innerHTML += `

    //                 <div class = "product" >
    //                      <ion-icon name="close-circle-outline" color="primary"></ion-icon>
    //                      <img class= "cart-image" src = "./pizza-images/${item.image}" >
    //                      <span> ${item.name}</span>
    //                 </div>

    //                 <div class = "price" > ${item.price}</div>
    //                 <div class = "quantity"> 
    //                      <ion-icon class="decrease" name="caret-back-circle-outline" color="primary"></ion-icon> 
    //                      <span> ${item.inCart}</span>
    //                      <ion-icon name="caret-forward-circle-outline" color="primary"></ion-icon>
    //                 </div>

    //                 <div class = "total">
    //                       $${item.inCart * item.price},00
    //                 </div>


    // `;

    if (cartItems && productContainer) {
        productContainer.innerHTML = " ";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        
        <table class="table align-middle mb-0 bg-white product">
  <thead class="bg-light">
    <tr>
      <th>Product-title</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="d-flex align-items-center">
          <img class= "cart-image" src = "./pizza-images/${item.image}" >
          <span> ${item.name}</span>
          </div>
        </div>
      </td>
      <td>
      <div class = "price" > ${item.price}</div>   
    </td>

    <td>
    <div class = "quantity"> 
                          <ion-icon class="decrease" name="caret-back-circle-outline" color="primary"></ion-icon> 
                         <span> ${item.inCart}</span>
                         <ion-icon name="caret-forward-circle-outline" color="primary"></ion-icon>
                    </div>
      </td>

        <td>
        <div class = "total">
                          $${item.inCart * item.price},00
                    </div>
      </td>
    </tr>
   
  </tbody>
</table>


  
        
        `

        });

        // productContainer.innerHTML += `
        //     <div class = "basketTotalCointainer">
        //          <h4 class = "basketTotalTitle"> Basket Total </h4>
        //          <h4 class = "basketTotal"> $${cartCost},00 </h4>


productContainer.innerHTML +=`
<tr>
<td>
<div class = "basketTotalCointainer">
          <h4 class = "basketTotalTitle"> Basket Total </h4> g
          <h4 class = "basketTotal"> $${cartCost},00 </h4>
         </td>
</tr>
        `;
    }
}

onLoadCartNumbers();
displayCart();