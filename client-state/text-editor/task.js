let editor = document.getElementById('editor');

window.addEventListener('load', () => {
    let text = localStorage.getItem('editorText');
    editor.value = text;
});

editor.addEventListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});