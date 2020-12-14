let signin__form = document.getElementById("signin__form");
let signin__btn = document.getElementById("signin__btn");
let signin = document.getElementById("signin");
let welcome = document.getElementById("welcome");
let user_id = document.getElementById("user_id");
signin__form.onsubmit = () => {return false};
let userId = localStorage.getItem("user_id");
if (userId) {
    welcome.classList.add("welcome_active");
    user_id.textContent = userId;
}
else {
    signin.classList.add("signin_active");
    signin__btn.addEventListener("click", function() {
        let formDate = new FormData(signin__form);
        let result = fetch("https://netology-slow-rest.herokuapp.com/auth.php", {
            method: "POST",
            body: formDate
        });
        result.then(response => response.json()).then(json => {
            console.log(json);
            if (json.success) {
                localStorage.setItem("user_id", json.user_id);
                welcome.classList.add("welcome_active");
                user_id.textContent = json.user_id;
                signin.classList.remove("signin_active");
            }
            else {
                alert("Неверный логин/пароль");
            }
        });
    });
}