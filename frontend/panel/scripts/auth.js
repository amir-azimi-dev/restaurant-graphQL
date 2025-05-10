const authorizeUser = async () => {
    const userToken = localStorage.getItem("access-token");
    if (!userToken) {
        return swal("ERROR", "You are NOT Authorized! Please Login in first.", "error");
    }

    const response = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`
        },
        body: JSON.stringify({
            query: `#graphql
                query {
                    getMe {
                        username,
                        email,
                        role
                    }
                }
            `
        })
    });

    const { data, errors } = await response.json();

    if (errors || !data.getMe || data.getMe.role !== "ADMIN") {
        return location.href = "/";
    }

    // console.log(data)
};

window.addEventListener("load", authorizeUser);