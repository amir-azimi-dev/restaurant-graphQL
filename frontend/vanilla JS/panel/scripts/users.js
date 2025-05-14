const usersTable = document.querySelector(".users-table");

const loadUsers = async () => {
    const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `#graphql
                query {
                    users {
                        username,
                        email,
                        role
                    }
                }
            `
        })
    });

    const { data, errors } = await response.json();
    if (errors) {
        return swal("error", errors[0].message, "error");
    }

    return data.users;
};

const insertDataInDom = usersData => {
    const usersTemplate = usersData.map((userData, index) => `
            <div class="table-row">
                <p class="id">#${index + 1}</p>
                <p>${userData.username}</p>
                <p>${userData.email}</p>
                <div class="flex center">
                <p class="${userData.role === "ADMIN" ? "green" : "yellow"
        }-status">${userData.role}</p>
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
    ).join("\n");

    usersTable.insertAdjacentHTML("beforeend", usersTemplate);
};

const loadData = async () => {
    const usersData = await loadUsers();
    insertDataInDom(usersData);
};

window.addEventListener("load", loadData);