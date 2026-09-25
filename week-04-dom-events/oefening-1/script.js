// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element

const input = document.querySelector('#input');
const list = document.querySelector('#list');
const button = document.querySelector('#add');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = input.value;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Verwijderen';
    removeButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(removeButton);
    list.appendChild(li);
});