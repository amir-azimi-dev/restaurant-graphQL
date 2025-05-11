const $ = document;
const categoriesContainer = $.querySelector(".category-list");
const foodsContainer = $.querySelector(".restaurant-list");
const ordersContainer = $.querySelector(".food-list");
const checkoutOrderBtn = $.querySelector(".btn.btn-warning.checkout-btn");

const loadCategories = async () => {
    const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `#graphql
                query {
                    categories {
                        title,
                        icon
                    }
                }
            `
        })
    });

    const { data } = await response.json();

    const categoriesTemplate = [...data.categories].slice(0, 9).map(categoryData => `
        <li class="category-list__item" id="${categoryData.title}">
            <a href="#${categoryData.title}">
              <div class="category-icon">
                <i class="${categoryData.icon}"></i>
              </div>
              <div class="category-name">${categoryData.title}</div>
            </a>
        </li>
    `).join("\n");

    categoriesContainer.insertAdjacentHTML("beforeend", categoriesTemplate);
};

const loadFoods = async () => {
    const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `#graphql
                query {
                    foods {
                        _id,
                        title,
                        price,
                        category {
                            title
                        }
                    }
                }
            `
        })
    });

    const { data } = await response.json();

    updateOrders(data.foods);

    const foodsTemplate = [...data.foods].slice(0, 9).map(foodData => {
        const targetFoodCountInBasket = getFoodCountInBasket(foodData._id);

        return `
        <li class="restaurant-list__item">
            <a href="#"><img class="restaurant-image" src="https://i.loli.net/2020/04/06/ZOsdvCkE6jDN8Ka.png"/></a>
            <div class="restaurant-name">
                ${foodData.title}
                <button onclick="addOrderHandler('${foodData._id}')">add order</button>
                ${targetFoodCountInBasket > 0 ?
                `<button onclick="removeOrderHandler(\'${foodData._id}\')">remove order</button>` :
                ""
            }
            </div>
            <div class="restaurant-info">
              <span class="restaurant-rate">
                <svg t="1586144500681" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="1458" width="10" height="10">
                  <path
                    d="M686.153143 573.732571l174.884571-169.691429-241.152-35.401143-108.032-218.258286-108.032 218.258286-241.152 35.401143 174.884571 169.691429-41.691429 240.566857 215.990857-113.737143 215.405714 113.737143zM987.282286 369.737143q0 12.580571-14.848 27.428571l-207.433143 202.313143 49.152 285.696q0.585143 4.022857 0.585143 11.410286 0 28.598857-23.405714 28.598857-10.825143 0-22.820571-6.875429l-256.585143-134.875429-256.585143 134.875429q-12.580571 6.875429-22.820571 6.875429-11.995429 0-17.993143-8.265143t-5.997714-20.260571q0-3.437714 1.170286-11.410286l49.152-285.696-208.018286-202.313143q-14.262857-15.433143-14.262857-27.428571 0-21.138286 32.036571-26.258286l286.866286-41.691429 128.585143-260.022857q10.825143-23.405714 28.013714-23.405714t28.013714 23.405714l128.585143 260.022857 286.866286 41.691429q32.036571 5.12 32.036571 26.258286z"
                    p-id="1459"></path>
                </svg>4.7</span>
              <span class="restaurant-category">${foodData.category.title} · ${foodData.price.toLocaleString()} Toman</span>
            </div>
        </li>
    `
    }).join("\n");

    foodsContainer.innerHTML = "";
    foodsContainer.insertAdjacentHTML("beforeend", foodsTemplate);
};

const getFoodCountInBasket = foodId => {
    const localStorageBasket = localStorage.getItem("basket");
    const basket = localStorageBasket ? JSON.parse(localStorageBasket) : [];

    const targetItem = basket.find(item => item.food === foodId);
    return targetItem?.count || 0;
};

const addOrderHandler = async foodId => {
    const localStorageBasket = localStorage.getItem("basket");
    const basket = localStorageBasket ? JSON.parse(localStorageBasket) : [];

    const targetIndex = basket.findIndex(item => item.food === foodId);
    let newBasket = [];

    if (targetIndex !== -1) {
        newBasket = [...basket];
        newBasket[targetIndex].count = newBasket[targetIndex].count + 1;
    } else {
        newBasket = [...basket, { food: foodId, count: 1 }]
    }

    localStorage.setItem("basket", JSON.stringify(newBasket))

    swal("Great", "Your basket has been updated.", "success");
    loadFoods();
};

const removeOrderHandler = async foodId => {
    const localStorageBasket = localStorage.getItem("basket");
    const basket = localStorageBasket ? JSON.parse(localStorageBasket) : [];

    const newBasket = basket.filter(item => item.food !== foodId);

    localStorage.setItem("basket", JSON.stringify(newBasket))

    swal("Great", "Your basket has been updated.", "success");
    loadFoods();
};

const updateOrders = foodsData => {
    const localStorageBasket = localStorage.getItem("basket");
    const basket = localStorageBasket ? JSON.parse(localStorageBasket) : [];

    let totalPrice = 0;

    const ordersTemplate = basket.map(item => {
        const targetFoodData = foodsData.find(food => food._id === item.food);
        const targetFoodCount = getFoodCountInBasket(item.food);

        totalPrice += item.count * targetFoodData.price;

        return `
            <li class="food-list__item">
                <img class="food-image" src="https://i.loli.net/2020/04/06/ZOsdvCkE6jDN8Ka.png" />
                <div class="food-buy-amount">${targetFoodCount} x</div>
                <div class="food-name">${targetFoodData.title}</div>
                <div class="food-price">${targetFoodData.price.toLocaleString()} Toman</div>
            </li>
        `;
    }).join("\n");

    const deliveryTemplate = `
        <li class="food-list__item">
            <img class="food-image" src="https://i.loli.net/2020/04/06/BN2JIuHAC6Gh3eR.png" />
            <div class="food-name">Delivery</div>
            <div class="food-price">$0.00</div>
        </li>`;

    ordersContainer.innerHTML = "";
    ordersContainer.insertAdjacentHTML("beforeend", ordersTemplate + deliveryTemplate);

    const totalPriceElement = $.querySelector(".total-price>.price");

    totalPriceElement.innerHTML = `${totalPrice.toLocaleString()} Toman`;
};

const checkoutOrderHandler = async () => {
    const localStorageBasket = localStorage.getItem("basket");
    const basket = localStorageBasket ? JSON.parse(localStorageBasket) : [];

    if (!basket.length) {
        return swal("Please add an order first", "", "info");
    }

    const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `#graphql
                mutation {
                    createOrder (
                        title: ${new Date()},
                        payload: JSON.parse(${basket})
                    ) {
                        title,
                        payload,
                        isDelivered
                    }
                }
            `
        })
    });

    const { data, errors } = await response.json();
    console.log(data)
    if (errors) {
        return swal("Error:", errors[0].message, "error");
    }

    swal("Great", "Your Order has been checked out successfully.", "success")
};

const loadData = async () => {
    await loadCategories();
    await loadFoods();
};

window.addEventListener("load", loadData);
checkoutOrderBtn.addEventListener("click", checkoutOrderHandler);

window.addOrderHandler = addOrderHandler;
window.removeOrderHandler = removeOrderHandler;