let product__add = document.querySelectorAll(".product__add");
let product__quantity_control_dec = document.querySelectorAll(".product__quantity-control_dec");
let product__quantity_control_inc = document.querySelectorAll(".product__quantity-control_inc");
let product__quantity_value = document.querySelectorAll(".product__quantity-value");
let cart__products = document.querySelector(".cart__products");
let product__image = document.querySelectorAll(".product__image");
let product = document.querySelectorAll(".product");
let list_cart_product = [];

product__quantity_control_dec.forEach((item, index) => {
    item.addEventListener("click", () => {
        let element = product__quantity_value[index];
            if(element.textContent > 1) {
                element.textContent--
            }
    });
});
product__quantity_control_inc.forEach((item,index) => {
    item.addEventListener("click", () => {
        let element = product__quantity_value[index];
            element.textContent++
    });
});
product__add.forEach((item, index) => {
    item.addEventListener("click", () => {
        let id = product[index].getAttribute("data-id");
        if (list_cart_product[id]) {
            list_cart_product[id].textContent = Number(product__quantity_value[index].textContent) + Number(list_cart_product[id].textContent);
            return;
        }
        let cart__product = document.createElement("div");
        let cart__product__image = document.createElement("img");
        let cart__product__count = document.createElement("div");
        cart__product.setAttribute("data-id", id);
        cart__product.classList.add("cart__product");
        cart__product__image.src = product__image[index].src;
        cart__product__image.classList.add("cart__product-image");
        cart__product__count.classList.add("cart__product-count");
        cart__product__count.textContent = product__quantity_value[index].textContent;
        cart__product.appendChild(cart__product__image);
        cart__product.appendChild(cart__product__count);
        cart__products.appendChild(cart__product);
        list_cart_product[id] = cart__product__count;
    });
});