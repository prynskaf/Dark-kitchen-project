// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the necessary elements
    const categoryButtons = document.querySelectorAll('.categoryBtn');
    const galleryItems = document.querySelectorAll('.gallery');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    const checkoutButton = document.querySelector('.checkout');
  
    let cart = [];
  
    // Get the buttons
const foodBtn = document.querySelector('.btn[data-category="Food"]');
const drinksBtn = document.querySelector('.btn[data-category="Drinks"]');
const dessertsBtn = document.querySelector('.btn[data-category="Desserts"]');

// Get the corresponding sections
const foodSection = document.querySelector('.FoodGallery');
const drinksSection = document.querySelector('.DrinksSection');
const dessertsSection = document.querySelector('.DessertSection');

// Add click event listeners to the buttons
foodBtn.addEventListener('click', () => {
  foodSection.scrollIntoView({ behavior: 'smooth' });
});

drinksBtn.addEventListener('click', () => {
  drinksSection.scrollIntoView({ behavior: 'smooth' });
});

dessertsBtn.addEventListener('click', () => {
  dessertsSection.scrollIntoView({ behavior: 'smooth' });
});
  
    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.addToCartBtn');
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const galleryItem = button.parentNode.parentNode;
        const itemDescription = galleryItem.querySelector('.description').textContent;
        const itemPrice = parseFloat(galleryItem.querySelector('b').textContent);
  
        // Create a new cart item object
        const cartItem = {
          description: itemDescription,
          price: itemPrice
        };
  
        // Add the item to the cart array
        cart.push(cartItem);
  
        // Update the cart display
        displayCartItems();
  
        // Calculate and display the total amount
        calculateTotalAmount();
      });
    });
  
    // Update the cart display
    function displayCartItems() {
      cartItems.innerHTML = '';
  
      cart.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item.description;
        cartItems.appendChild(li);
      });
    }
  
    // Calculate and display the total amount
    function calculateTotalAmount() {
      let total = 0;
  
      cart.forEach(function(item) {
        total += item.price;
      });
  
      totalAmount.textContent = 'Total: ' + total.toFixed(2) + '€';
    }
  
    // Add event listener to the "Checkout" button
    checkoutButton.addEventListener('click', function() {
      if (cart.length > 0) {
        alert('Thank you for your order!');
        cart = [];
        displayCartItems();
        calculateTotalAmount();
      } else {
        alert('Your cart is empty. Please add items before checking out.');
      }
    });
  });
  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}