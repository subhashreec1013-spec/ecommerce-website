let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart
function addToCart(name, price, image) {
    let item = cart.find(p => p.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
    updateCartCount();
}

// Remove ONE quantity from cart
function removeFromCart(name) {
    let item = cart.find(p => p.name === name);

    if (!item) return;

    item.quantity--;

    // If 0 → remove fully
    if (item.quantity <= 0) {
        cart = cart.filter(p => p.name !== name);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    location.reload(); // refresh UI
}

// Update count in cart icon
function updateCartCount() {
    let count = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.querySelector(".cart .badge").innerText = count;
}
updateCartCount();