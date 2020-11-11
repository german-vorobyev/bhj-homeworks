let dropdown__value = document.querySelectorAll(".dropdown__value");
dropdown__value.forEach(function(item) {
    item.addEventListener("click", function() {
        this.closest(".dropdown").querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
    });
});
let dropdown__link = document.querySelectorAll(".dropdown__link");
dropdown__link.forEach(function(item) {
    item.onclick = function() {return false};
});
let dropdown__item = document.querySelectorAll(".dropdown__item");
dropdown__item.forEach(function(item) {
    item.addEventListener ("click", function() {
        this.parentElement.classList.toggle("dropdown__list_active");
        let link = this.querySelector(".dropdown__link");
        let langName = link.textContent;
        this.closest(".dropdown").querySelector(".dropdown__value").innerHTML = langName;
    });
});