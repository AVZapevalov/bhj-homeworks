const deadCount = document.getElementById("dead");
const lostCount = document.getElementById("lost");

function newGame() {
    deadCount.textContent = 0;
    lostCount.textContent = 0;
}

for (i = 1; i < 10; i++) {
    let currentElement = document.getElementById(`hole${i}`);
    currentElement.onclick = function() {
        if (currentElement.className.includes("hole_has-mole")) {
            deadCount.textContent++;
        } else {
            lostCount.textContent++;
        }

        if (deadCount.textContent === "10") {
            alert("Победа"),
            newGame();
        }
    
        if (lostCount.textContent === "5") {
            alert("Вы проиграли"),
            newGame();
        }
    }
}