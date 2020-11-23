let interests_main = document.querySelectorAll(".interests_main");
interests_main.forEach(function(interest) {
    let li = interest.querySelector("ul").children;
    li = Array.from(li);
    li.forEach(function(item) {
        let input = item.querySelector("label").querySelector("input");
        input.addEventListener("click", function() {
            let interests = item.querySelector(".interests");
            if (interests) {
                let interest__check = interests.querySelectorAll(".interest__check");
                interest__check.forEach(function(itemInterest) {
                    itemInterest.checked = input.checked;
                });
            }
        });
    });
});