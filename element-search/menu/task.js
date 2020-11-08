let menu_item = document.querySelectorAll(".menu__item");
let menu__link = document.querySelectorAll(".menu__link");
menu__link.forEach(function(item) {
    let menu_sub = item.parentElement.querySelector(".menu_sub");
    if (menu_sub) {
        item.onclick = function() {
            return false;
        }
    }
});
menu_item.forEach(function(item) {
    item.addEventListener("click", function(target) {
        let menu_main = this.closest(".menu_main");
        let menu_active = menu_main.querySelector(".menu_active");
        if (menu_active)
            menu_active.classList.toggle("menu_active");
        if (menu_active != null && menu_active.parentElement == target.currentTarget)
            return;     
        let menu_sub = this.querySelector(".menu_sub");
        if (menu_sub) {
            menu_sub.classList.toggle("menu_active");
        }
    });
});