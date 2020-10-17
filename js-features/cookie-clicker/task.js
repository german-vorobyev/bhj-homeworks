function clicker() {
    const image = document.getElementById("cookie");
    let counter = 1;
    function changeSizes() {
        clicker__counter.innerHTML = counter;
        if (counter % 2 == 0) {
            image.width = 200;
        } else {
            image.width = 180;
        }
        counter++;
    }
    image.onclick = changeSizes;
}
clicker();