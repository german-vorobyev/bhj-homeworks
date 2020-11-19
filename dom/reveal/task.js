// let reveal = document.querySelectorAll(".reveal");
// let arrayReveal = Array.from(reveal);
// window.addEventListener("scroll", function(e) {
//     let height = document.body.clientHeight;
//     let visibleReveale = arrayReveal.filter(function(item) {
//         return item.getBoundingClientRect().top < height;
//     });
//     visibleReveale.forEach(function(item) {
//         item.classList.toggle("reveal_active");
//     });
// });
window.addEventListener("scroll", function() {
    let isInViewport = function (element) {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
            if(elementTop < viewportHeight) {
                element.classList.add("reveal_active");
            }
    };
    let reveal = document.querySelectorAll(".reveal");
    reveal.forEach(isInViewport)
});