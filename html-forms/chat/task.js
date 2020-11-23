let chat_widget__side = document.querySelector(".chat-widget__side");
let chat_widget = document.querySelector(".chat-widget");
let chat_widget__input = document.getElementById("chat-widget__input");
let chat_widget__messages = document.getElementById("chat-widget__messages");
let answersRobotList = ["Добрый день! До свидания!","Кто тут?","Где ваша совесть","Непишите больше нам!","Не за что!"];
chat_widget__side.addEventListener("click", function() {
    chat_widget.classList.toggle("chat-widget_active");
});
function getCurrentTime () {
    let time = new Date().toLocaleTimeString().split(":");
    return time[0] + ':' + time[1];
}
chat_widget__input.onkeypress = function(e){
    if (!e) e = window.event;
    let keyCode = e.keyCode || e.which;
    if (keyCode == '13' && chat_widget__input.value != "") {
        chat_widget__messages.innerHTML += `<div class="message message_client">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${chat_widget__input.value}</div>
        </div>`;
        chat_widget__messages.innerHTML += `<div class="message">
        <div class="message__time">${getCurrentTime()}</div>
        <div class="message__text">${answersRobotList[Math.floor(Math.random() * answersRobotList.length)]}</div>
        </div>`;
        chat_widget__input.value = "";
        return false;
    }
}