/* ==========================================
   DANARCI
   MAIN JAVASCRIPT
========================================== */


/* =========================
   PRODUCTS
========================= */

const products = [
    {
        id: 1,
        nameUz: "DANARCI Doner",
        nameRu: "Данер DANARCI",
        category: "doner",
        price: 35000,
        emoji: "🌯",
        descUz: "Go‘sht, sabzavot va maxsus sous.",
        descRu: "Мясо, овощи и фирменный соус."
    },

    {
        id: 2,
        nameUz: "Maxsus Doner",
        nameRu: "Специальный данер",
        category: "doner",
        price: 45000,
        emoji: "🌯",
        descUz: "Katta hajmdagi maxsus doner.",
        descRu: "Большой специальный данер."
    },

    {
        id: 3,
        nameUz: "Tovuq Doner",
        nameRu: "Куриный данер",
        category: "doner",
        price: 32000,
        emoji: "🍗",
        descUz: "Mazali tovuq go‘shti bilan.",
        descRu: "С вкусным куриным мясом."
    },

    {
        id: 4,
        nameUz: "DANARCI Lavash",
        nameRu: "Лаваш DANARCI",
        category: "lavash",
        price: 30000,
        emoji: "🌯",
        descUz: "Yumshoq lavash va mazali masalliqlar.",
        descRu: "Мягкий лаваш и вкусная начинка."
    },

    {
        id: 5,
        nameUz: "Cheese Lavash",
        nameRu: "Сырный лаваш",
        category: "lavash",
        price: 38000,
        emoji: "🧀",
        descUz: "Pishloqli maxsus lavash.",
        descRu: "Специальный лаваш с сыром."
    },

    {
        id: 6,
        nameUz: "Chicken Burger",
        nameRu: "Чикен бургер",
        category: "burger",
        price: 30000,
        emoji: "🍔",
        descUz: "Tovuq go‘shti va yangi sabzavotlar.",
        descRu: "Курица и свежие овощи."
    },

    {
        id: 7,
        nameUz: "Cheese Burger",
        nameRu: "Чизбургер",
        category: "burger",
        price: 35000,
        emoji: "🍔",
        descUz: "Pishloqli mazali burger.",
        descRu: "Вкусный бургер с сыром."
    },

    {
        id: 8,
        nameUz: "Kartoshka Fri",
        nameRu: "Картофель фри",
        category: "combo",
        price: 18000,
        emoji: "🍟",
        descUz: "Qarsildoq kartoshka fri.",
        descRu: "Хрустящий картофель фри."
    },

    {
        id: 9,
        nameUz: "Coca Cola",
        nameRu: "Coca Cola",
        category: "drink",
        price: 10000,
        emoji: "🥤",
        descUz: "Sovuq Coca Cola.",
        descRu: "Холодная Coca Cola."
    },

    {
        id: 10,
        nameUz: "Fanta",
        nameRu: "Fanta",
        category: "drink",
        price: 10000,
        emoji: "🥤",
        descUz: "Sovuq Fanta.",
        descRu: "Холодная Fanta."
    },

    {
        id: 11,
        nameUz: "Pepsi",
        nameRu: "Pepsi",
        category: "drink",
        price: 10000,
        emoji: "🥤",
        descUz: "Sovuq Pepsi.",
        descRu: "Холодный Pepsi."
    },

    {
        id: 12,
        nameUz: "DANARCI Combo",
        nameRu: "Комбо DANARCI",
        category: "combo",
        price: 60000,
        emoji: "🍔",
        descUz: "Burger + fri + ichimlik.",
        descRu: "Бургер + фри + напиток."
    }
];


/* =========================
   STATE
========================= */

let currentLang = "uz";
let cart = [];
let currentCategory = "all";

let map = null;
let marker = null;

let selectedLat = null;
let selectedLng = null;


/* =========================
   TRANSLATIONS
========================= */

const translations = {

    uz: {
        home: "Bosh sahifa",
        menu: "Menyu",
        about: "Biz haqimizda",
        contact: "Aloqa",

        fresh: "Har kuni yangi va mazali",

        heroTitle: "Mazali doner.",
        heroTitle2: "Tez yetkazib berish.",

        heroText:
            "Sevimli doner, lavash va fast foodlaringizni DANARCI'dan buyurtma qiling.",

        orderNow: "Buyurtma berish",
        learnMore: "Batafsil",

        foodTypes: "Taom turi",
        delivery: "Yetkazib berish",
        quality: "Sifat",

        rating: "Reyting",
        fastDelivery: "Tez yetkazish",

        ourMenu: "Bizning menyu",
        menuText: "O'zingizga yoqqan taomni tanlang.",

        all: "Barchasi",
        doner: "Doner",
        lavash: "Lavash",
        burger: "Burger",
        drinks: "Ichimliklar",
        combo: "Combo",

        aboutTitle: "Mazali taom — yaxshi kayfiyat!",
        aboutText:
            "DANARCI — sifatli mahsulotlardan tayyorlangan mazali doner, lavash, burger va ichimliklarni taklif qiluvchi fast food.",

        qualityFood: "Sifatli mahsulotlar",
        fastService: "Tez xizmat",
        deliveryAvailable: "Yetkazib berish xizmati",
        freshEveryDay: "Har kuni yangi taom",

        contactTitle: "Biz bilan bog‘laning",
        phone: "Telefon",
        address: "Manzil",
        addressText: "Sizning shaharingiz",
        workingHours: "Ish vaqti",

        footerText: "Mazali taomlar olami.",

        yourCart: "Sizning savatingiz",
        emptyCart: "Savatingiz hozircha bo‘sh.",
        total: "Jami:",
        checkout: "Buyurtma berish",

        orderTitle: "Buyurtma berish",
        orderSubtitle: "Ma'lumotlaringizni kiriting.",
        name: "Ismingiz",
        phoneNumber: "Telefon raqamingiz",
        deliveryAddress: "Yetkazib berish manzili",
        chooseLocation: "Xaritadan joyingizni tanlang",
        myLocation: "Mening joylashuvim",
        locationNotSelected: "Xaritadan joy tanlanmagan",

        paymentMethod: "To‘lov usuli",
        cash: "Naqd pul",
        card: "Karta",

        orderTotal: "Buyurtma summasi",
        confirmOrder: "Buyurtmani tasdiqlash",

        receiptTitle: "BUYURTMA CHEKI",
        payment: "To‘lov",
        thankYou: "DANARCI'ni tanlaganingiz uchun rahmat!",
        print: "Chekni chop etish",
        newOrder: "Yangi buyurtma"
    },


    ru: {
        home: "Главная",
        menu: "Меню",
        about: "О нас",
        contact: "Контакты",

        fresh: "Каждый день свежо и вкусно",

        heroTitle: "Вкусный данер.",
        heroTitle2: "Быстрая доставка.",

        heroText:
            "Заказывайте любимые данеры, лаваши и фастфуд в DANARCI.",

        orderNow: "Заказать",
        learnMore: "Подробнее",

        foodTypes: "Виды блюд",
        delivery: "Доставка",
        quality: "Качество",

        rating: "Рейтинг",
        fastDelivery: "Быстрая доставка",

        ourMenu: "Наше меню",
        menuText: "Выберите блюдо, которое вам нравится.",

        all: "Все",
        doner: "Данер",
        lavash: "Лаваш",
        burger: "Бургер",
        drinks: "Напитки",
        combo: "Комбо",

        aboutTitle: "Вкусная еда — хорошее настроение!",
        aboutText:
            "DANARCI — это фастфуд с вкусными данерами, лавашами, бургерами и напитками из качественных продуктов.",

        qualityFood: "Качественные продукты",
        fastService: "Быстрое обслуживание",
        deliveryAvailable: "Доставка",
        freshEveryDay: "Свежие блюда каждый день",

        contactTitle: "Свяжитесь с нами",
        phone: "Телефон",
        address: "Адрес",
        addressText: "Ваш город",
        workingHours: "Время работы",

        footerText: "Мир вкусной еды.",

        yourCart: "Ваша корзина",
        emptyCart: "Ваша корзина пока пуста.",
        total: "Итого:",
        checkout: "Оформить заказ",

        orderTitle: "Оформление заказа",
        orderSubtitle: "Введите ваши данные.",
        name: "Ваше имя",
        phoneNumber: "Номер телефона",
        deliveryAddress: "Адрес доставки",
        chooseLocation: "Выберите место на карте",
        myLocation: "Моё местоположение",
        locationNotSelected: "Место на карте не выбрано",

        paymentMethod: "Способ оплаты",
        cash: "Наличные",
        card: "Карта",

        orderTotal: "Сумма заказа",
        confirmOrder: "Подтвердить заказ",

        receiptTitle: "ЧЕК ЗАКАЗА",
        payment: "Оплата",
        thankYou: "Спасибо, что выбрали DANARCI!",
        print: "Распечатать чек",
        newOrder: "Новый заказ"
    }

};


/* =========================
   FORMAT PRICE
========================= */

function formatPrice(price) {
    return new Intl.NumberFormat("uz-UZ").format(price) + " so'm";
}


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts() {

    const productsContainer = document.getElementById("products");

    let filteredProducts = products;

    if (currentCategory !== "all") {
        filteredProducts = products.filter(
            item => item.category === currentCategory
        );
    }

    productsContainer.innerHTML = "";

    filteredProducts.forEach(product => {

        const name =
            currentLang === "uz"
                ? product.nameUz
                : product.nameRu;

        const description =
            currentLang === "uz"
                ? product.descUz
                : product.descRu;

        const categoryName =
            translations[currentLang][product.category === "drink"
                ? "drinks"
                : product.category];

        productsContainer.innerHTML += `

            <article class="product">

                <div class="product-image">
                    ${product.emoji}
                </div>

                <div class="product-body">

                    <div class="product-category">
                        ${categoryName || product.category}
                    </div>

                    <h3>${name}</h3>

                    <p class="product-description">
                        ${description}
                    </p>

                    <div class="product-bottom">

                        <span class="price">
                            ${formatPrice(product.price)}
                        </span>

                        <button
                            class="add-btn"
                            onclick="addToCart(${product.id})"
                        >
                            +
                        </button>

                    </div>

                </div>

            </article>
        `;
    });
}


/* =========================
   ADD CART
========================= */

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;

    const existing = cart.find(
        item => item.id === productId
    );

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();

    openCart();

}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartEmpty = document.getElementById("cartEmpty");

    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const checkoutTotal = document.getElementById("checkoutTotal");

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    cartCount.textContent = totalQuantity;

    cartTotal.textContent = formatPrice(totalPrice);

    checkoutTotal.textContent = formatPrice(totalPrice);

    if (cart.length === 0) {

        cartItems.innerHTML = "";

        cartEmpty.style.display = "flex";

    } else {

        cartEmpty.style.display = "none";

        cartItems.innerHTML = cart.map(item => {

            const name =
                currentLang === "uz"
                    ? item.nameUz
                    : item.nameRu;

            return `

                <div class="cart-item">

                    <div class="cart-item-image">
                        ${item.emoji}
                    </div>

                    <div class="cart-item-info">

                        <h4>${name}</h4>

                        <p>
                            ${formatPrice(item.price)}
                        </p>

                        <div class="quantity">

                            <button
                                onclick="changeQuantity(${item.id}, -1)"
                            >
                                −
                            </button>

                            <strong>${item.quantity}</strong>

                            <button
                                onclick="changeQuantity(${item.id}, 1)"
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <button
                        class="delete-item"
                        onclick="removeFromCart(${item.id})"
                    >
                        🗑️
                    </button>

                </div>
            `;
        });
    }

}


/* =========================
   QUANTITY
========================= */

function changeQuantity(id, amount) {

    const item = cart.find(
        product => product.id === id
    );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(
            product => product.id !== id
        );
    }

    updateCart();
}


/* =========================
   REMOVE
========================= */

function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== id
    );

    updateCart();
}


/* =========================
   CART OPEN/CLOSE
========================= */

const cartSidebar = document.getElementById("cartSidebar");
const overlay = document.getElementById("overlay");

function openCart() {

    cartSidebar.classList.add("open");
    overlay.classList.add("show");

}

function closeCart() {

    cartSidebar.classList.remove("open");
    overlay.classList.remove("show");

}

document.getElementById("openCart")
    .addEventListener("click", openCart);

document.getElementById("closeCart")
    .addEventListener("click", closeCart);

overlay.addEventListener("click", closeCart);


/* =========================
   CATEGORY
========================= */

document.querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll(".category")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            renderProducts();

        });

    });


/* =========================
   LANGUAGE
========================= */

function setLanguage(lang) {

    currentLang = lang;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key = element.dataset.i18n;

            if (translations[lang][key]) {
                element.textContent =
                    translations[lang][key];
            }

        });

    document.querySelectorAll(".lang-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === lang
            );

        });

    renderProducts();
    updateCart();

}

document.querySelectorAll(".lang-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            setLanguage(
                button.dataset.lang
            );

        });

    });


/* =========================
   CHECKOUT
========================= */

const checkoutModal =
    document.getElementById("checkoutModal");

const receiptModal =
    document.getElementById("receiptModal");


document.getElementById("checkoutButton")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert(
                currentLang === "uz"
                    ? "Avval savatga mahsulot qo‘shing."
                    : "Сначала добавьте товар в корзину."
            );

            return;
        }

        closeCart();

        checkoutModal.classList.add("show");

        setTimeout(() => {
            initializeMap();
        }, 100);

    });


document.getElementById("closeCheckout")
    .addEventListener("click", () => {

        checkoutModal.classList.remove("show");

    });


/* =========================
   MAP
========================= */

function initializeMap() {

    if (map) {
        map.invalidateSize();
        return;
    }

    /*
       Boshlang‘ich joy:
       Samarqand markazi.
       Xohlasangiz keyin o‘zingizning
       restoran koordinatangizni qo‘yishingiz mumkin.
    */

    const defaultLat = 39.6542;
    const defaultLng = 66.9597;

    map = L.map("map").setView(
        [defaultLat, defaultLng],
        13
    );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution:
                '&copy; OpenStreetMap contributors'
        }
    ).addTo(map);

    map.on("click", function (event) {

        setMapLocation(
            event.latlng.lat,
            event.latlng.lng
        );

    });

}


function setMapLocation(lat, lng) {

    selectedLat = lat;
    selectedLng = lng;

    if (marker) {
        map.removeLayer(marker);
    }

    marker = L.marker([
        lat,
        lng
    ]).addTo(map);

    marker.bindPopup(
        currentLang === "uz"
            ? "Sizning yetkazib berish joyingiz"
            : "Ваш адрес доставки"
    ).openPopup();

    const locationText =
        document.getElementById("selectedLocation");

    locationText.innerHTML = `
        📍 ${lat.toFixed(5)}, ${lng.toFixed(5)}
    `;

}


/* =========================
   MY LOCATION
========================= */

document.getElementById("myLocation")
    .addEventListener("click", () => {

        if (!navigator.geolocation) {

            alert(
                currentLang === "uz"
                    ? "Brauzeringiz geolokatsiyani qo‘llab-quvvatlamaydi."
                    : "Ваш браузер не поддерживает геолокацию."
            );

            return;
        }

        navigator.geolocation.getCurrentPosition(

            position => {

                const lat =
                    position.coords.latitude;

                const lng =
                    position.coords.longitude;

                initializeMap();

                map.setView(
                    [lat, lng],
                    16
                );

                setMapLocation(lat, lng);

            },

            () => {

                alert(
                    currentLang === "uz"
                        ? "Joylashuvni aniqlashga ruxsat berilmadi."
                        : "Не удалось получить местоположение."
                );

            }

        );

    });


/* =========================
   ORDER FORM
========================= */

document.getElementById("orderForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        if (cart.length === 0) return;


        const name =
            document.getElementById("customerName")
                .value.trim();

        const phone =
            document.getElementById("customerPhone")
                .value.trim();

        const address =
            document.getElementById("customerAddress")
                .value.trim();

        const payment =
            document.querySelector(
                'input[name="payment"]:checked'
            ).value;


        if (!name || !phone || !address) {

            alert(
                currentLang === "uz"
                    ? "Iltimos, barcha ma’lumotlarni kiriting."
                    : "Пожалуйста, заполните все данные."
            );

            return;
        }


        createReceipt(
            name,
            phone,
            address,
            payment
        );

        checkoutModal.classList.remove("show");

        receiptModal.classList.add("show");

    });


/* =========================
   CREATE RECEIPT
========================= */

function createReceipt(
    name,
    phone,
    address,
    payment
) {

    const receiptName =
        document.getElementById("receiptName");

    const receiptPhone =
        document.getElementById("receiptPhone");

    const receiptAddress =
        document.getElementById("receiptAddress");

    const receiptPayment =
        document.getElementById("receiptPayment");

    const receiptItems =
        document.getElementById("receiptItems");

    const receiptTotal =
        document.getElementById("receiptTotal");

    const receiptDate =
        document.getElementById("receiptDate");


    receiptName.textContent = name;

    receiptPhone.textContent = phone;

    receiptAddress.textContent = address;

    receiptPayment.textContent =
        payment === "cash"
            ? currentLang === "uz"
                ? "Naqd pul"
                : "Наличные"
            : currentLang === "uz"
                ? "Karta"
                : "Карта";


    receiptItems.innerHTML = "";


    let total = 0;


    cart.forEach(item => {

        const name =
            currentLang === "uz"
                ? item.nameUz
                : item.nameRu;

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        receiptItems.innerHTML += `

            <div class="receipt-item">

                <span>
                    ${name} x${item.quantity}
                </span>

                <strong>
                    ${formatPrice(itemTotal)}
                </strong>

            </div>

        `;

    });


    receiptTotal.textContent =
        formatPrice(total);


    const now = new Date();

    receiptDate.textContent =
        now.toLocaleString(
            currentLang === "uz"
                ? "uz-UZ"
                : "ru-RU"
        );

}


/* =========================
   CLOSE RECEIPT
========================= */

document.getElementById("closeReceipt")
    .addEventListener("click", () => {

        receiptModal.classList.remove("show");

    });


/* =========================
   PRINT
========================= */

document.getElementById("printReceipt")
    .addEventListener("click", () => {

        window.print();

    });


/* =========================
   NEW ORDER
========================= */

document.getElementById("newOrder")
    .addEventListener("click", () => {

        receiptModal.classList.remove("show");

        document.getElementById("orderForm")
            .reset();

        selectedLat = null;
        selectedLng = null;

        if (marker && map) {
            map.removeLayer(marker);
            marker = null;
        }

        cart = [];

        updateCart();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


/* =========================
   ESCAPE
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeCart();

        checkoutModal.classList.remove("show");

        receiptModal.classList.remove("show");

    }

});


/* =========================
   START
========================= */

renderProducts();
updateCart();
setLanguage("uz");