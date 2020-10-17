let second = 59;
function tiktak() {
    if (document.getElementById) {
        timer.innerHTML = second;
    }
    if (second == 0) {
       return alert('Вы победили в конкурсе!');       
    }
    second--;
    setTimeout("tiktak()", 1000);
}
tiktak();