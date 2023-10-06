document.addEventListener("DOMContentLoaded", function () {
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");
  
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
    
    xhr.onload = () => {
      if (xhr.status === 200) {
        const pollData = JSON.parse(xhr.responseText);
  
        pollTitle.textContent = pollData.data.title;
  
        pollData.data.answers.forEach((answer) => {
          const answerButton = document.createElement("button");
          answerButton.classList.add("poll__answer");
          answerButton.textContent = answer;
          answerButton.addEventListener("click", () => {
            alert("Спасибо, ваш голос засчитан!");
          });
          pollAnswers.appendChild(answerButton);
        });
      } else {
        console.error("Error request: " + xhr.status);
      }
    };
    xhr.send();
  });
  