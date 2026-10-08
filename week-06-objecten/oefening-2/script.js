const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

const originalList = document.getElementById('origineel');
const copiedList = document.getElementById('kopie');

// 1. Originele lijst met alleen naam en stad
const origineleLijst = people.map(({ name, city }) => {
  return `${name} - ${city}`;
});

document.querySelector('#origineel').innerHTML += `
  <ul>
    ${origineleLijst.map(item => `<li>${item}</li>`).join('')}
  </ul>
`;

// 2. Nieuwe array zonder de originele te wijzigen
const aangepasteKopie = people.map(person => {
  return {
    ...person,
    city: 'Den Haag'
  };
});

// 3. Toon de aangepaste kopie
const kopieLijst = aangepasteKopie.map(({ name, city }) => {
  return `${name} - ${city}`;
});

document.querySelector('#kopie').innerHTML += `
  <ul>
    ${kopieLijst.map(item => `<li>${item}</li>`).join('')}
  </ul>
`;

// 1. Toon in #origineel de originele lijst met alleen namen en steden.
//    Gebruik destructuring in je .map().
// 2. Maak met .map() en de spread operator een nieuwe array waarin
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
//    De originele people-array moet onveranderd blijven.
// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.