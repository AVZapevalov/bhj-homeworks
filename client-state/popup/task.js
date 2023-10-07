const closeButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

const isPopupClosed = document.cookie.includes("popupClosed=true");

if (!isPopupClosed && !sessionStorage.getItem("popupShown")) {
  modal.style.display = "flex";
}

closeButton.addEventListener("click", function () {
  document.cookie = "popupClosed=true"
  modal.style.display = "none";
  sessionStorage.setItem("popupShown", "true");
});
