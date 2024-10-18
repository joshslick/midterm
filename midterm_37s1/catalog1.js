document.addEventListener("DOMContentLoaded", function () {
    const cars = [
        {
            name: "Accord",
            description: "The Honda Accord is a midsize sedan known for its fuel efficiency, safety, reliability, and technology.",
            image: "./images/accord.png"
        },
        {
            name: "Civic",
            description: "The Honda Civic is a compact car available in sedan, hatchback, and coupe forms, offering practicality and value.",
            image: "./images/civic.png"
        },
        {
            name: "CR-V",
            description: "The Honda CR-V is a compact SUV known for its practicality, efficiency, and refined features, available in gas and hybrid models.",
            image: "./images/CR-V.png"
        }
    ];

    const container = document.getElementById("catalog-container");

    cars.forEach(car => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "shadow-sm");

        const img = document.createElement("img");
        img.src = car.image;
        img.alt = car.name;
        img.classList.add("bd-placeholder-img", "card-img-top");
        img.width = "100%";
        img.height = "225";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const carName = document.createElement("h1");
        carName.textContent = car.name;

        const description = document.createElement("p");
        description.classList.add("card-text");
        description.textContent = car.description;

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");

        const viewBtn = document.createElement("button");
        viewBtn.type = "button";
        viewBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
        viewBtn.textContent = "View";

        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
        editBtn.textContent = "Edit";

        btnGroup.appendChild(viewBtn);
        btnGroup.appendChild(editBtn);

        const footer = document.createElement("div");
        footer.classList.add("d-flex", "justify-content-between", "align-items-center");

        const smallText = document.createElement("small");
        smallText.classList.add("text-body-secondary");
        smallText.textContent = "9 mins";

        footer.appendChild(btnGroup);
        footer.appendChild(smallText);

        cardBody.appendChild(carName);
        cardBody.appendChild(description);
        cardBody.appendChild(footer);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);

        container.appendChild(colDiv);
    });
});
