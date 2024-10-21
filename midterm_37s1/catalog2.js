document.addEventListener("DOMContentLoaded", function () {
    
    fetch("./data.json")  
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("catalog-container");
            
            const cars = data.chevorlet;
            
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

                const price_range = document.createElement("p");
                price_range.classList.add("card-text");
                price_range.textContent = car.price_range;


                const footer = document.createElement("div");
                footer.classList.add("d-flex", "justify-content-between", "align-items-center");


                cardBody.appendChild(carName);
                cardBody.appendChild(description);
                cardBody.appendChild(price_range);
                cardBody.appendChild(footer);

                cardDiv.appendChild(img);
                cardDiv.appendChild(cardBody);
                colDiv.appendChild(cardDiv);

                container.appendChild(colDiv);
            });
        })
        .catch(error => console.error("Error fetching the JSON data:", error));
});