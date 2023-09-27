let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
    let valueContainer = dropdown.querySelector('.dropdown__value');
    let list = dropdown.querySelector('.dropdown__list');
    let items = dropdown.querySelectorAll('.dropdown__item');

    valueContainer.addEventListener('click', function() {
        list.classList.toggle('dropdown__list_active');
    });

    items.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); 
            let selectedValue = item.textContent; 
            valueContainer.textContent = selectedValue; 
            list.classList.remove('dropdown__list_active');
        });
    });
});