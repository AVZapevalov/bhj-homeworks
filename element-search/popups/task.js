const modalMain = document.getElementById("modal_main");
const modalSucces = document.getElementById("modal_success");
const modalClose = document.getElementsByClassName("modal__close");
const buttons = document.querySelector(".btn");

modalMain.classList.toggle("modal_active");

function clickButtons() {
    modalMain.classList.toggle("modal_active");
    modalSucces.classList.toggle("modal_active");
}

buttons.addEventListener("click", clickButtons);

Array.from(modalClose).forEach(element => {
    element.addEventListener("click", clickClose);
    function clickClose() {
        this.closest(".modal").classList.remove("modal_active");
    }
});