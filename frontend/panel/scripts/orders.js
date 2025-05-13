const ordersTable = document.querySelector(".orders-table");

const loadOrders = async () => {
    const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `#graphql
                query {
                  orders {
                    _id,
                    payload {
                      food {
                        title,
                        price
                      }
                      count
                    },
                    user {
                      username,
                      email
                    },
                    isDelivered
                  }
                }
            `
        })
    });

    const { data, errors } = await response.json();
    if (errors) {
        return swal("error", errors[0].message, "error");
    }

    return data.orders;
};

const insertDataInDom = ordersData => {
    const ordersTemplate = ordersData.map((orderData, index) => {
        let totalPrice = 0;

        const foods = orderData.payload.map(item => {
            totalPrice += item.food.price * item.count;
            return `${item.food.title} (${item.count}-x)`;
        }).join(", ");      
        

        return `
            <div class="table-row">
                <p class="id">#${index + 1}</p>
                <p>${orderData.user.username}</p>
                <div class="flex center">
                    <a to="" class="link"> ${foods} </a>
                </div>
                <div class="flex center">
                    <p class="${orderData.isDelivered ? "green" : "yellow"}-status">
                        ${orderData.isDelivered ? "Send" : "Pending ..."}
                    </p>
                </div>
                <div class="flex center">
                    <p class="price">${totalPrice.toLocaleString()} Toman</p>
                </div>
                <div class="flex center">
                    <button class="ui-button error">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button class="ui-button primary">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            </div>
        `
    }).join("\n");

    ordersTable.insertAdjacentHTML("beforeend", ordersTemplate);
};

const loadData = async () => {
    const ordersData = await loadOrders();
    insertDataInDom(ordersData);
};

window.addEventListener("load", loadData);