const editor = document.getElementById('editor');

const savedText = localStorage.getItem('editorText');

editor.addEventListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});