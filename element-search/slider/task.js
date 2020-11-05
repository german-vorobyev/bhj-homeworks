let slider__arrow_prev = document.querySelector(".slider__arrow_prev");
let slider__arrow_next = document.querySelector(".slider__arrow_next");
slider__arrow_next.addEventListener("click", function() {
    let slider__item_active = document.querySelector(".slider__item_active");
    slider__item_active.classList.toggle("slider__item_active");
    let next_slider_item_active = slider__item_active.nextElementSibling;
    if (!next_slider_item_active) {
        next_slider_item_active = slider__item_active.parentElement.firstElementChild;
    }
    next_slider_item_active.classList.toggle("slider__item_active");
});
slider__arrow_prev.addEventListener("click", function() {
    let slider__item_active = document.querySelector(".slider__item_active");
    slider__item_active.classList.toggle("slider__item_active");
    let prev_slider_item_active = slider__item_active.previousElementSibling;
    if (!prev_slider_item_active) {
        prev_slider_item_active = slider__item_active.parentElement.lastElementChild;
    }
    prev_slider_item_active.classList.toggle("slider__item_active");
});
let listImages = document.querySelectorAll(".slider__item");
let listDots = document.querySelectorAll(".slider__dot");
let arrayImages = [];
listImages.forEach(function (item) {
    arrayImages.push(item);
});
let arrayDots = [];
listDots.forEach(function(item) {
    arrayDots.push(item);
});
arrayDots.forEach(function(item,index) {
    item.addEventListener("click" ,function() {
        let slider__item_active = document.querySelector(".slider__item_active");
        slider__item_active.classList.toggle("slider__item_active");
        arrayImages[index].classList.toggle("slider__item_active");
    })
});