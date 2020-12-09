let poll__title = document.getElementById("poll__title");
let poll__answers = document.getElementById("poll__answers");

let pressButton = (event) => {
    alert("Спасибо, ваш голос засчитан!");
    let target = event.target;
    loadStatistic(poll__answers.getAttribute("data-id"), target.getAttribute("data-id"));
}

function loadStatistic(id, idAnswer) {
    poll__answers.innerHTML = "";
    let result = fetch("https://netology-slow-rest.herokuapp.com/poll.php", {
        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: "vote="+id+"&answer="+idAnswer
      });
      result.then(response => response.json()).then(json => {
        let sum = 0;
        json.stat.forEach(item => {
            sum += item.votes;
        });
        json.stat.forEach(item => {
            let answer = document.createElement("div");
            let text = document.createElement("span");
            let votes = document.createElement("span");
            answer.appendChild(text);
            answer.appendChild(document.createTextNode(" "));
            answer.appendChild(votes);
            poll__answers.appendChild(answer);
            text.innerHTML = item.answer;
            votes.innerHTML = ((item.votes / sum) * 100).toFixed(4) + "%";
        });
      });
}
function show () {
    poll__answers.innerHTML = "";
    let result = fetch("https://netology-slow-rest.herokuapp.com/poll.php");
    result.then(response => response.json()).then(json => {
        poll__title.innerHTML = json.data.title;
        poll__answers.setAttribute("data-id", json.id);
        json.data.answers.forEach((item, index) => {
        let poll__answer = document.createElement("button");
        poll__answer.classList.add("poll__answer");
        poll__answers.appendChild(poll__answer);
        poll__answer.innerHTML = item;
        poll__answer.setAttribute("data-id", index);
        poll__answer.onclick = pressButton;
        });
    });
}
show();