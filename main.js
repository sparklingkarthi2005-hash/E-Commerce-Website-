const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
    { id: 2, name: "Smart Watch", price: 149.99, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
    { id: 3, name: "Leather Backpack", price: 79.99, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300" },
];
let cart = [];
// Render Products
const productGrid = document.getElementById('product-grid');
products.forEach(product => {
    productGrid.innerHTML += `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});
function addToCart(id) 
{
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
}
function updateCartUI() 
{
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <p>${item.name} - $${item.price}</p>
        </div>
    `).join('');
   const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
}
function toggleCart() 
{
    document.getElementById('cart-drawer').classList.toggle('active');
}