let listRotator = document.querySelectorAll(".rotator");
function activiteRotator(rotator) {
    let listRotatorCase = rotator.querySelectorAll(".rotator__case");
    let arrayRotatorCase = Array.from(listRotatorCase);
    let activiteRotator = rotator.querySelector(".rotator__case_active");
    let position = arrayRotatorCase.indexOf(activiteRotator);
    let getParametr = (item) => {
        let timeOut = item.getAttribute("data-speed");
        let color = item.getAttribute("data-color");
        return {timeOut, color};
    };
    let startTimeOut = () => {
        let {timeOut, color} = getParametr(arrayRotatorCase[position]);
        arrayRotatorCase[position].style.color = color;
        setTimeout(() => {
            arrayRotatorCase[position].classList.toggle("rotator__case_active");
            position = (position + 1) % arrayRotatorCase.length;
            arrayRotatorCase[position].classList.toggle("rotator__case_active");
            startTimeOut();
        }, timeOut);
    };
    startTimeOut();
}
listRotator.forEach(activiteRotator);