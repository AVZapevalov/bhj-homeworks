document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const itemsContainer = document.getElementById("items");
  
    const xhr = new XMLHttpRequest();
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        const valute = data.response.Valute;
        for (const key in valute) {
          if (valute.hasOwnProperty(key)) {
            const currency = valute[key];
            const item = document.createElement("div");
            item.classList.add("item");
            item.innerHTML = `
              <div class="item__code">${currency.CharCode}</div>
              <div class="item__value">${currency.Value}</div>
              <div class="item__currency">руб.</div>
            `;
            itemsContainer.appendChild(item);
          }
        }
  
        loader.classList.remove("loader_active");
      } else {
        console.error("Load error: " + xhr.status);
        loader.classList.remove("loader_active");
      }
    };
  
    xhr.onerror = () => {
      console.error("Request error");
      loader.classList.remove("loader_active");
    };
  
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

    loader.classList.add("loader_active");
  
    xhr.send();
  });
  