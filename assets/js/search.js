let products = [
    { name: "White Gown", price: 1200, image: "assets/images/product1.png", description: "A stunning White Gown crafted with delicate detailing and a flattering fit." },
    { name: "Black Suit", price: 2000, image: "assets/images/product2.png", description: "The Black Suit delivers a perfect balance of elegance and confidence." },
    { name: "Red Gown", price: 800, image: "assets/images/product3.png", description: "A stunning Red Gown crafted with delicate detailing and a flattering fit." }
];

// render UI
function displayProducts(list) {
    let table = document.querySelector("#results");
    table.innerHTML = "";
    list.forEach((p, index) => {
        table.innerHTML += `
        <tr>
            <td class="number text-center">${index + 1}</td>
            <td class="image"><img src="${p.image}" width="100px"></td>
            <td class="product"><strong>${p.name}</strong><br>${p.description}</td>
            <td class="price text-right">₹${p.price}</td>
        </tr>
        `;
    });
}

// search filter
document.getElementById("searchInput").addEventListener("keyup", function () {
    let text = this.value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(text));
    displayProducts(filtered);
});

// first load
displayProducts(products);