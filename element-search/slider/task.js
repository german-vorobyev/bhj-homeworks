let slider__arrow_prev = document.querySelector(".slider__arrow_prev");
let slider__arrow_next = document.querySelector(".slider__arrow_next");
let listImages = document.querySelectorAll(".slider__item");
let listDots = document.querySelectorAll(".slider__dot");
let arrayImages = Array.from(listImages);
let arrayDots = Array.from(listDots);
function showImage (index) {
    let slider__item_active = document.querySelector(".slider__item_active");
    slider__item_active.classList.toggle("slider__item_active");
    arrayImages[index].classList.toggle("slider__item_active");
}
function blinkDot (index) {
    let slider__dot_active = document.querySelector(".slider__dot_active");
    if (slider__dot_active) {
        slider__dot_active.classList.toggle("slider__dot_active");
    }
    arrayDots[index].classList.toggle("slider__dot_active");
}
function slideImages (index) {
    showImage(index);
    blinkDot(index);
}
blinkDot(0);
let controller = {
    index: 0,
    arrayImages: arrayImages,
    showImage: function(index) {},
    nextImage: function() {
        this.index = (this.index + 1) % this.arrayImages.length;
        this.showImage(this.index);
    },
    prevImages: function() {
        this.index = this.index - 1;
        if (this.index < 0)
            this.index = this.arrayImages.length - 1;
        this.showImage(this.index);
    },
    setIndex: function(index) {
        this.index = index;
        this.showImage(this.index);
    } 
};
controller.showImage = slideImages;
slider__arrow_next.addEventListener("click", function() {
    controller.nextImage();
});

slider__arrow_prev.addEventListener("click", function() {
    controller.prevImages();
});

arrayDots.forEach(function(item,index) {
    item.addEventListener("click" ,function() {
        controller.setIndex(index);
    });
});