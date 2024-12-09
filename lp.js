let cart = [];

// Add to Cart Function
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
    const cartLink = document.querySelector('header nav a:last-child');
    cartLink.textContent = `Cart (${cart.length})`;
}

// Open Cart Popup
function openCartPopup() {
    document.getElementById('cart-popup').style.display = 'block';
}

// Close Cart Popup
function closeCartPopup() {
    document.getElementById('cart-popup').style.display = 'none';
}

// Checkout Function
function checkout() {
    alert('Proceeding to checkout...');
}
