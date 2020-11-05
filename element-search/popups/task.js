let modal_main = document.getElementById("modal_main");
let modal_success = document.getElementById("modal_success");
modal_main.classList.add("modal_active");
let btn = modal_main.querySelector(".btn");
btn.addEventListener("click", function() {
    modal_main.classList.remove("modal_active");
    modal_success.classList.add("modal_active");
});
let btn_success = modal_success.querySelector(".btn");
btn_success.addEventListener("click", function() {
    modal_success.classList.remove("modal_active");
});
let modal__close = document.querySelectorAll(".modal__close");
modal__close.forEach(function(item) {
    item.addEventListener("click", function() {
        this.parentElement.parentElement.classList.remove("modal_active");
    });
});