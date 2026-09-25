const title = document.getElementById('title');
const button = document.getElementById('btn');
const section = document.getElementById('section');
const naam = 'Djano';
const opleiding = 'Software Developer';
let aantalKlikken = 0;

const berekenpunten = (aantalKlikken) => {
  return aantalKlikken * 10;
}

button.addEventListener('click', () => {
  aantalKlikken += 1;
  title.textContent = `Hoi, ik ben ${naam} en ik doe ${opleiding}.`;
  title.classList.toggle('active');
  p = document.createElement('p');
  p.textContent = `Klik ${aantalKlikken}: Je hebt nu ${berekenpunten(aantalKlikken)} punten.`;
  section.appendChild(p);
});