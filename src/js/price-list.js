  let pricelist = "/price-list/price-list.json";
  fetch(pricelist)
    .then((response) => {
      if (!response.ok) {
        throw new Error("File not found" + response.status);
      }
      return response.json();
    })
    .then((jsonData) => {
      let pricebox = document.querySelector(".price-box");

      for (let i = 0; i < jsonData.length; i++) {
        const section = document.createElement("section");
        section.classList.add("price-box__item", `box-id${i}`);
        section.setAttribute("id", `box-id${i}`);

        const title = document.createElement("h3");
        title.classList.add("price-box__title", "font-size_3", "text-capitalize", "title--gold");
        title.textContent = jsonData[i].title;

        const arrow = document.createElement("span");
        arrow.classList.add("price-box__title-arrow");
        arrow.setAttribute("aria-hidden", "true");
        arrow.innerHTML = "&#9660;";

        const dl = document.createElement("dl");
        dl.classList.add("price-list");

        const servicesNumber = jsonData[i].services.length;
        for (let j = 0; j < servicesNumber; j++) {
          let div = document.createElement("div");
          div.classList.add("price-item");

          const services = jsonData[i].services[j];
          const dt = document.createElement("dt");
          dt.classList.add("price-item__name");
          dt.textContent = services.name;

          const dd = document.createElement("dd");
          dd.classList.add("price-item__cost");

          const ul = document.createElement("ul");
          ul.classList.add("cost");

          const currency = document.createElement("li");
          currency.classList.add("cost__currency");
          currency.innerHTML = "&#36;";

          const price = document.createElement("li");
          price.classList.add("cost__price");
          price.textContent = services.cost.price;

          dl.appendChild(div);
          div.append(dt, dd);
          dd.appendChild(ul);
          ul.append(currency, price);

          const keys = Object.keys(services.cost);
          const costNumber = keys.length;
          if (costNumber > 1) {
            const specification = document.createElement("li");
            specification.classList.add("cost__specification");
            ul.appendChild(specification);
            specification.innerHTML = "&ensp;";

            for (let i = 1; i < costNumber; i++) {
              const span = document.createElement("span");
              if (keys[i] == "weight") {
                span.innerHTML = "/ " + services.cost[keys[i]] + "g";
              } else {
                span.innerHTML = services.cost[keys[i]];
              }
              specification.appendChild(span);
            }
          }
        }
        title.appendChild(arrow);
        section.append(title, dl);
        pricebox.appendChild(section);
      }
/* accordion */
      const acc = document.getElementsByClassName("price-box__title");
console.log(acc);

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.log ("нажал");
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "flex" ? "none" : "flex";
  });
}
    })
    .catch((error) => {
      console.error("Error loading or processing JSON:", error);
    });
