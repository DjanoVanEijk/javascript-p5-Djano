// Stap 1: Selecteer het formulier en de profielenlijst
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon een profielkaart met innerHTML +=
// Stap 3 (bonus): Voeg een verwijderknop toe aan elke kaart

const form = document.querySelector('#profile-form');
const profilesList = document.querySelector('#profiles-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const age = document.querySelector('#age').value;

  const profileCard = `
    <div class="profile-card">
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Leeftijd: ${age}</p>
    </div>
  `;

  profilesList.innerHTML += profileCard;
});