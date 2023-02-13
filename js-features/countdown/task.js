const timer = document.getElementById("timer");
let intervalId = setInterval(countdown, 1000);

function countdown() {
    --timer.textContent;
    if (timer.textContent === "0") {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
}