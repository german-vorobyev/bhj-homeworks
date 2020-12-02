let task__input = document.getElementById("task__input");
let tasks__add = document.getElementById("tasks__add");
let tasks__list = document.getElementById("tasks__list");
let tasks__form = document.getElementById("tasks__form");
tasks__form.onsubmit = () => {return false;}
function addTask () {
    if (task__input.value) {
        let task = document.createElement("div");
        task.classList.add("task");
        let task__title = document.createElement("div");
        task__title.classList.add("task__title");
        let task__remove = document.createElement("a");
        task__remove.classList.add("task__remove");
        task.appendChild(task__title);
        task.appendChild(task__remove);
        task__title.innerHTML = task__input.value;
        tasks__list.appendChild(task);
        task__remove.href = "#";
        task__remove.innerHTML = "&times;";
        task__remove.onclick = () => {return false;}
        task__input.value = "";
        task__remove.addEventListener ("click", removeTask);
    }
}
document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
});
tasks__add.addEventListener("click", () => {
    addTask();
});
function removeTask (event) {
    let target = event.target;
    let task = target.parentElement;
    tasks__list.removeChild(task);
}
