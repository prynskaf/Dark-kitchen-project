// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the necessary elements
    const categoryButtons = document.querySelectorAll('.categoryBtn');
    const galleryItems = document.querySelectorAll('.gallery');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    const checkoutButton = document.querySelector('.checkout');
  
    let cart = [];
  
    // Add event listeners to category buttons
    categoryButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const category = button.getAttribute('data-category');
  
        // Hide all gallery items
        galleryItems.forEach(function(item) {
          item.style.display = 'none';
        });
  
        // Show gallery items of the selected category
        const categoryItems = document.querySelectorAll('.gallery[data-category="' + category + '"]');
        categoryItems.forEach(function(item) {
          item.style.display = 'block';
        });
      });
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
  