const clickerCounter = document.getElementById("clicker__counter");
const clickerImage = document.getElementById("cookie");
const clickerSpeed = document.getElementById("clicker__speed");
let startDate;
let endDate;

clickerImage.onclick = function () {
    
    clickerCounter.textContent++;
    if (clickerCounter.textContent % 2 === 0) {
        clickerImage.width = 200; 
        endDate = new Date(); 
        clickerSpeed.textContent = Math.trunc(100000/(endDate.getTime() - startDate.getTime()))/100;
    } else {
        clickerImage.width = 220;
        startDate = new Date();
    } 
    
};


