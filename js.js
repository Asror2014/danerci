const categories = [
  "Barchasi",
  "Donar",
  "Burger",
  "Lavash",
  "Hot-dog",
  "Pizza",
  "Set",
  "Fri",
  "Ichimlik",
  "Desert"
];

const names = [
  "Classic Donar", "Cheese Donar", "Chicken Donar", "Max Donar",
  "Beef Donar", "Spicy Donar", "Double Donar", "Mini Donar",
  "Danerci Burger", "Cheese Burger", "Double Burger", "Chicken Burger",
  "Crispy Burger", "BBQ Burger", "Max Burger", "Mini Burger",
  "Classic Lavash", "Cheese Lavash", "Chicken Lavash", "Beef Lavash",
  "Spicy Lavash", "Max Lavash", "Mini Lavash", "Double Lavash",
  "Classic Hot-dog", "Cheese Hot-dog", "Max Hot-dog", "Spicy Hot-dog",
  "Chicken Hot-dog", "Double Hot-dog", "Mini Hot-dog", "BBQ Hot-dog",
  "Margherita Pizza", "Cheese Pizza", "Chicken Pizza", "Beef Pizza",
  "Pepperoni Pizza", "Spicy Pizza", "Max Pizza", "Mini Pizza",
  "Danerci Set", "Family Set", "Burger Set", "Lavash Set",
  "Donar Set", "Hot-dog Set", "Kids Set", "Max Set",
  "French Fries", "Cheese Fries", "Spicy Fries", "Max Fries",
  "Chicken Nuggets", "Onion Rings", "Cheese Balls", "Wings",
  "Coca Cola", "Pepsi", "Fanta", "Sprite",
  "Ice Tea", "Juice", "Mineral Water", "Lemonade",
  "Chocolate Cake", "Cheesecake", "Ice Cream", "Donut",
  "Brownie", "Tiramisu", "Cookie", "Waffle"
];

const emojis = {
  "Donar": "🌯",
  "Burger": "🍔",
  "Lavash": "🌯",
  "Hot-dog": "🌭",
  "Pizza": "🍕",
  "Set": "🍱",
  "Fri": "🍟",
  "Ichimlik": "🥤",
  "Desert": "🍰"
};

let products = [];
let cart = [];
let selectedCategory = "Barchasi";

names.forEach((name, i) => {
  let category;

  if (name.includes("Donar")) category = "Donar";
  else if (name.includes("Burger")) category = "Burger";
  else if (name.includes("Lavash")) category = "Lavash";
  else if (name.includes("Hot-dog")) category = "Hot-dog";
  else if (name.includes("Pizza")) category = "Pizza";
  else if (name.includes("Set")) category = "Set";
  else if (
    name.includes("Fries") ||
    name.includes("Nuggets") ||
    name.includes("Rings") ||
    name.includes("Balls") ||
    name.includes("Wings")
  ) category = "Fri";
  else if (
    name.includes("Cola") ||
    name.includes("Pepsi") ||
    name.includes("Fanta") ||
    name.includes("Sprite") ||
    name.includes("Tea") ||
    name.includes("Juice") ||
    name.includes("Water") ||
    name.includes("Lemonade")
  ) category = "Ichimlik";
  else category = "Desert";

  products.push({
    id: i + 1,
    name,
    category,
    price: 15000 + (i % 10) * 5000,
    emoji: emojis[category]
  });
});

function login() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("Iltimos, ism, telefon va manzilingizni kiriting.");
    return;
  }

  localStorage.setItem("danerciUser",
    JSON.stringify({ name, phone, address })
  );

  showApp();
}

function instagramLogin() {
  alert(
    "Instagram orqali kirish uchun rasmiy Instagram autentifikatsiyasi ulanishi kerak."
  );
}

function showApp() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function renderCategories() {
  const box = document.getElementById("categories");

  box.innerHTML = categories.map(c => `
    <button
      class="category ${c === selectedCategory ? "active" : ""}"
      onclick="filterProducts('${c}')">
      ${c}
    </button>
  `).join("");
}

function filterProducts(category) {
  selectedCategory = category;
  renderCategories();
  renderProducts();
}

function renderProducts() {
  const box = document.getElementById("products");

  const list = selectedCategory === "Barchasi"
    ? products
    : products.filter(p => p.category === selectedCategory);

  box.innerHTML = list.map(p => `
    <div class="product">
      <div class="product-img">${p.emoji}</div>

      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">${p.price.toLocaleString()} so'm</div>

        <button class="add" onclick="addToCart(${p.id})">
          + Savatga qo‘shish
        </button>
      </div>
    </div>
  `).join("");
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      ...product,
      qty: 1
    });
  }

  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").textContent =
    cart.reduce((sum, item) => sum + item.qty, 0);
}

function openCart() {
  renderCart();
  document.getElementById("cartModal").classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cartModal").classList.add("hidden");
}

function renderCart() {
  const box = document.getElementById("cartItems");

  if (!cart.length) {
    box.innerHTML = "<p>Savat hozircha bo‘sh.</p>";
    document.getElementById("cartTotal").textContent = "0 so'm";
    return;
  }

  box.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <b>${item.emoji} ${item.name}</b><br>
        ${item.qty} × ${item.price.toLocaleString()} so'm
      </div>

      <button onclick="removeFromCart(${item.id})">❌</button>
    </div>
  `).join("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  document.getElementById("cartTotal").textContent =
    total.toLocaleString() + " so'm";
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
  renderCart();
}

function checkout() {
  if (!cart.length) {
    alert("Savat bo‘sh.");
    return;
  }

  const user = JSON.parse(localStorage.getItem("danerciUser"));

  document.getElementById("deliveryInfo").innerHTML =
    `<b>${user.name}</b><br>
     📞 ${user.phone}<br>
     📍 ${user.address}`;

  closeCart();
  document.getElementById("paymentModal").classList.remove("hidden");
}

function closePayment() {
  document.getElementById("paymentModal").classList.add("hidden");
}

function pay() {
  const card = document.getElementById("card").value.trim();
  const cardName = document.getElementById("cardName").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (!card || !cardName || !expiry || !cvv) {
    alert("Karta ma'lumotlarini to‘liq kiriting.");
    return;
  }

  /*
    Bu demo.
    Haqiqiy to‘lovda karta ma'lumotlarini o‘zingiz
    saqlamang. Payment provider/checkout ishlating.
  */

  const user = JSON.parse(localStorage.getItem("danerciUser"));

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  document.getElementById("receipt").innerHTML = `
    <p><b>Buyurtma muvaffaqiyatli qabul qilindi!</b></p>
    <br>

    <p>👤 ${user.name}</p>
    <p>📞 ${user.phone}</p>
    <p>📍 ${user.address}</p>

    <hr><br>

    ${cart.map(item => `
      <div class="receipt-line">
        <span>${item.name} × ${item.qty}</span>
        <b>${(item.price * item.qty).toLocaleString()} so'm</b>
      </div>
    `).join("")}

    <hr>

    <div class="receipt-line">
      <b>JAMI</b>
      <b>${total.toLocaleString()} so'm</b>
    </div>

    <br>
    <p>🧾 Danerci</p>
    <p>Rahmat! Yana kutamiz ❤️</p>
  `;

  closePayment();
  document.getElementById("receiptModal").classList.remove("hidden");

  cart = [];
  updateCart();
}

function closeReceipt() {
  document.getElementById("receiptModal").classList.add("hidden");
}

window.onload = function() {
  const user = localStorage.getItem("danerciUser");

  if (user) {
    showApp();
  }

  renderCategories();
  renderProducts();
};
