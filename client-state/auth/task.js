document.getElementById("signin__form").addEventListener("submit", (e) => {
  e.preventDefault();

  let form = document.getElementById("signin__form");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

  xhr.onload = function () {
    if (xhr.status === 201) {
      let response = JSON.parse(xhr.responseText);

      if (response.success) {
        let userId = response.user_id;
        localStorage.setItem("user_id", userId);
        showWelcomeBlock(userId);
        form.reset();
      } else {
        alert("Неверный логин/пароль");
      }
    } else {
      alert("Ошибка при отправке запроса или сервер вернул ошибку");
    }
  };

  let formData = new FormData(form);
  xhr.send(formData);
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