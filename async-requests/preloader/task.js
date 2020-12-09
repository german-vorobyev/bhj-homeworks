let loader = document.getElementById("loader");
let items = document.getElementById("items");
let result = fetch("https://netology-slow-rest.herokuapp.com/");
result.then(response => response.json()).then(courses => {
    let valute = courses.response.Valute;
    for (let code in valute) {
        let item = document.createElement("div");
        item.classList.add("item");
        let item_code = document.createElement("div");
        item_code.classList.add("item__code");
        let item_value = document.createElement("div");
        item_value.classList.add("item__value");
        let item__currency = document.createElement("div");
        item__currency.classList.add("item__currency");
        item.appendChild(item_code);
        item.appendChild(item_value);
        item.appendChild(item__currency);
        items.appendChild(item);
        item_code.innerHTML = code;
        item_value.innerHTML = valute[code].Value;
        item__currency.innerHTML = "руб.";
    }
    loader.classList.remove("loader_active");
});