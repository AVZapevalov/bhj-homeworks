const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData();
  formData.append('file', fileInput);

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
  xhr.upload.onprogress = (event) => {
    console.log( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );
    if (event.lengthComputable) {
      let percentComplete = (event.loaded / event.total);
      progress.value = percentComplete.toFixed(1);
    } 
  };

  xhr.onload = () => {
    if (xhr.status === 200) {
      alert('Load sucses!');
    } else {
      alert('Error load');
    }
  };

  xhr.send(formData);
});
