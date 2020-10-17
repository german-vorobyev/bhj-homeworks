function kill() {
    const cell = document.getElementsByClassName("hole");
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    let counter = 0;
    let counterMiss = 0;
    for (let i = 0; i < cell.length; i++) {
        cell[i].onclick = function() {
            if (this.classList.contains( 'hole_has-mole' )) {
                counter++;
                if (counter >= 10) {
                    alert("Победа!");
                    counterMiss = 0;
                    counter = 0;
                }
            } else {
                counterMiss++;
                if (counterMiss >= 5) {
                    alert("Проигрыш!");
                    counterMiss = 0;
                    counter = 0;
                }
            }
            dead.innerHTML = counter;
            lost.innerHTML = counterMiss;
        }

    }
}
kill();