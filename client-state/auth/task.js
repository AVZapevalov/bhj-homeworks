document.getElementById("signin__form").addEventListener("submit", (e) => {
  e.preventDefault();

  let login = document.getElementsByName("login")[0].value;
  let password = document.getElementsByName("password")[0].value;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

  console.log(xhr.status);

  xhr.onload = function () {
    if (xhr.status === 201) {
      let response = JSON.parse(xhr.responseText);
      if (response.success) {
        let userId = response.user_id;
        localStorage.setItem("user_id", userId);
        showWelcomeBlock(userId);
      } else {
        alert("Неверный логин/пароль");
      }
    } else {
      alert("Ошибка при отправке запроса");
    }
  };

  let data = JSON.stringify({ login: login, password: password });
  xhr.send(data);
});

function showWelcomeBlock(userId) {
  let welcomeBlock = document.getElementById("welcome");
  let userIdSpan = document.getElementById("user_id");
  userIdSpan.textContent = userId;
  welcomeBlock.classList.add("welcome_active");
}

document.addEventListener("DOMContentLoaded", () => {
  let userId = localStorage.getItem("user_id");
  if (userId) {
    showWelcomeBlock(userId);
  }
});