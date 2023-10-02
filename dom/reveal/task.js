const revealElements = document.querySelectorAll('.reveal');

function checkVisibility() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight) {
      element.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkVisibility);