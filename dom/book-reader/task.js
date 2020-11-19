let buttonList = document.querySelectorAll(".font-size");
let book__content = document.querySelectorAll(".book__content");
buttonList.forEach((item) => {
    item.onclick = function() {
        return false;
    }
    item.addEventListener("click", function() {
        let size = item.getAttribute("data-size");
        let size_active = document.querySelector(".font-size_active");
        size_active.classList.remove("font-size_active");
        item.classList.toggle("font-size_active");
        if (size == "small") {
            book__content.forEach((text) => {
                text.classList.add("font-size_small");
                text.classList.remove("font-size_big");
            });
        } else if (size == "big") {
            book__content.forEach((text) => {
                text.classList.add("font-size_big");
                text.classList.remove("font-size_small");
            });
        } else {
            book__content.forEach((text) => {
                text.classList.remove("font-size_big");
                text.classList.remove("font-size_small");
            });
        }
    });
});