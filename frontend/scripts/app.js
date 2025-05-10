const $ = document;
const categoriesContainer = $.querySelector(".category-list");
const foodsContainer = $.querySelector(".restaurant-list");

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

    const foodsTemplate = [...data.foods].slice(0, 9).map(foodTitle => `
        <li class="restaurant-list__item">
            <a href="#"><img class="restaurant-image" src="https://i.loli.net/2020/04/06/ZOsdvCkE6jDN8Ka.png"/></a>
            <div class="restaurant-name">${foodTitle.title}</div>
            <div class="restaurant-info">
              <span class="restaurant-rate">
                <svg t="1586144500681" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="1458" width="10" height="10">
                  <path
                    d="M686.153143 573.732571l174.884571-169.691429-241.152-35.401143-108.032-218.258286-108.032 218.258286-241.152 35.401143 174.884571 169.691429-41.691429 240.566857 215.990857-113.737143 215.405714 113.737143zM987.282286 369.737143q0 12.580571-14.848 27.428571l-207.433143 202.313143 49.152 285.696q0.585143 4.022857 0.585143 11.410286 0 28.598857-23.405714 28.598857-10.825143 0-22.820571-6.875429l-256.585143-134.875429-256.585143 134.875429q-12.580571 6.875429-22.820571 6.875429-11.995429 0-17.993143-8.265143t-5.997714-20.260571q0-3.437714 1.170286-11.410286l49.152-285.696-208.018286-202.313143q-14.262857-15.433143-14.262857-27.428571 0-21.138286 32.036571-26.258286l286.866286-41.691429 128.585143-260.022857q10.825143-23.405714 28.013714-23.405714t28.013714 23.405714l128.585143 260.022857 286.866286 41.691429q32.036571 5.12 32.036571 26.258286z"
                    p-id="1459"></path>
                </svg>4.7</span>
              <span class="restaurant-category">${foodTitle.category.title} · ${foodTitle.price.toLocaleString()} Toman</span>
            </div>
        </li>
    `).join("\n");

    foodsContainer.insertAdjacentHTML("beforeend", foodsTemplate);
};

const loadData = async () => {
    await loadCategories();
    await loadFoods();
};

window.addEventListener("load", loadData);