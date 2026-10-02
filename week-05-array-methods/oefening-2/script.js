const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];
const namesLowerCase = names.map(name => name.toLowerCase());
const searchFind = document.getElementById('search-find');
const outputFind = document.getElementById('output-find');
const searchIncludes = document.getElementById('search-includes');
const outputIncludes = document.getElementById('output-includes');
const searchbutton = document.getElementById('search-button');

searchFind.addEventListener('input', () => {
    const letter = searchFind.value.toLowerCase();
    const foundName = namesLowerCase.find(name => name.startsWith(letter));
    outputFind.textContent = foundName ? `Gevonden naam: ${foundName}` : 'Geen naam gevonden';
    searchFind.value = '';
});

searchbutton.addEventListener('click', () => {
    const name = searchIncludes.value.trim().toLowerCase();
    const isFound = namesLowerCase.includes(name);
    outputIncludes.textContent = isFound ? `Naam gevonden in de lijst` : `Naam niet gevonden in de lijst`;
    searchIncludes.value = '';
});

// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
