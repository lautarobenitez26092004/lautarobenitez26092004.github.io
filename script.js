
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-button");

let cart = [];
let total = 0;

function addToCart(product) {
    cart.push(product);
    total += product.price;
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = product.name + " - " + product.price + " USD";
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toFixed(2);
}


function processPayment() {
    if (cart.length > 0) {
        alert("Pago procesado. Gracias por tu compra.");
        cart = [];
        total = 0;
        updateCart();
    } else {
        alert("El carrito está vacío. Agrega productos antes de pagar.");
    }
}


checkoutButton.addEventListener("click", processPayment);


const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})