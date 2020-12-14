let editor = document.getElementById("editor");
editor.value = localStorage.getItem("editor");
editor.oninput = () => {
    localStorage.setItem("editor", editor.value);
}