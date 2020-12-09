let form = document.getElementById("form");
let send = document.getElementById("send");
let progress = document.getElementById("progress");

form.onsubmit = () => {return false;}
send.onclick = () => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    };
    xhr.upload.onload = function() {
        console.log(`Данные успешно отправлены.`);
    };
    xhr.upload.onerror = function() {
        console.log(`Произошла ошибка во время отправки: ${xhr.status}`);
    }
    xhr.send(formData);
}