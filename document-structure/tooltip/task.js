let has_tooltip = document.querySelectorAll(".has-tooltip");
has_tooltip.forEach((item) => {
    item.onclick = () => {return false;}
    item.addEventListener("click", () => {
        let tooltip = document.querySelector(".tooltip");
        if (tooltip) {
            tooltip.parentElement.removeChild(tooltip);
        }
        let title = item.getAttribute("title");
        let data_position = item.getAttribute("data-position");
        let div = document.createElement("div");
        div.classList.add("tooltip");
        div.classList.add("tooltip_active");
        let rect = item.getBoundingClientRect();
        if (data_position && data_position == "top") {
            div.style.left = rect.x + "px";
            div.style.top = (rect.top - 30) + "px";
        }
        else if (data_position && data_position == "right") {
            div.style.left = rect.right + "px";
            div.style.top = rect.top + "px";
        }
        else if (data_position && data_position == "left") {
            div.style.left = (rect.left - 200) + "px";
            div.style.top = rect.top + "px";
        }
        else {
            div.style.left = rect.x + "px";
            div.style.top = rect.bottom + "px";
        }
        div.innerHTML = title;
        item.after(div);
    });
});