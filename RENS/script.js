// Variables globales

const cart = document.querySelector('.cart');
const cartList = cart.querySelector('.cart-list');
const cartTotal = cart.querySelector('.cart-total');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const checkoutButton = document.querySelector('.checkout');

let itemsInCart = [];

// Funciones

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;
  
  itemsInCart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;
    cartList.appendChild(cartItem);
    
    total += item.price;
  });
  
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

function addToCart(name, price) {
  const item = {
    name: name,
    price: price
  };
  
  itemsInCart.push(item);
  updateCart();
}

function checkout() {
  alert('Gracias por tu compra!');
  itemsInCart = [];
  updateCart();
}

// Event listeners

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    addToCart(name, price);
  });
});

checkoutButton.addEventListener('click', checkout);
