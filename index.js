function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        const body = document.querySelector("body");
        const idElement = document.createElement("p");
        idElement.textContent = data.id;
        body.appendChild(idElement);
    })
    .catch(error => {
        const body = document.querySelector("body");
        const errorElement = document.createElement("p");
        errorElement.textContent = error.message;
        body.appendChild(errorElement);
    });
}
