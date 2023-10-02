const fontSizeLinks = document.querySelectorAll('.font-size');
const bookElement = document.getElementById('book');

fontSizeLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    
    fontSizeLinks.forEach((fontSizeLink) => {
      fontSizeLink.classList.remove('font-size_active');
    });

    link.classList.add('font-size_active');
    bookElement.classList.remove('book_fs-small', 'book_fs-big');

    const size = link.getAttribute('data-size');
    if (size) {
      bookElement.classList.add(`book_fs-${size}`);
    }
  });
});
