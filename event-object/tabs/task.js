let tabs = document.querySelectorAll(".tabs");
tabs.forEach(function(itemTab) {
    let tab = itemTab.querySelectorAll(".tab");
    let tab__content = itemTab.querySelectorAll(".tab__content");
    let arrayTab = Array.from(tab);
    let arrayContent = Array.from(tab__content);
    arrayTab.forEach(function(item,index) {
        item.addEventListener("click", function() {
            let activeTab = arrayTab.find(function (activeTab) {
                return activeTab.classList.contains("tab_active");
            });
            let activeContent = arrayContent[arrayTab.indexOf(activeTab)];
            activeTab.classList.toggle("tab_active");
            activeContent.classList.toggle("tab__content_active");
            this.classList.toggle("tab_active");
            arrayContent[index].classList.toggle("tab__content_active");
        });
    });
});