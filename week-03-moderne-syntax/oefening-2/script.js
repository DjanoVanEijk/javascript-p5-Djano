// Voeg een event listener toe aan elke knop
const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');
const button3 = document.querySelector('#btn-3');
const message = document.querySelector('#message');
const list = document.querySelector('#list');

button1.addEventListener('click', () => {
  message.textContent = 'Je hebt op knop 1 geklikt!';
});
button2.addEventListener('click', () => {
  list.innerHTML += '<li>Nieuw item toegevoegd!</li>';
});
button3.addEventListener('click', () => {
  message.classList.toggle('active');
});

// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message
