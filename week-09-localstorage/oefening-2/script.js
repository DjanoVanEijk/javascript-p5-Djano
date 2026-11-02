const user = { name: 'Anna', age: 28, city: 'Amsterdam' };

localStorage.setItem('userWithoutStringify', user); 
const retrievedUserWithoutStringify = localStorage.getItem('userWithoutStringify');
document.getElementById('zonder-json').textContent = `zonder JSON.stringify: ${retrievedUserWithoutStringify}`;

localStorage.setItem('userWithStringify', JSON.stringify(user));
const retrievedUserWithStringify = JSON.parse(localStorage.getItem('userWithStringify'));
document.getElementById('met-json').textContent = `met JSON.stringify: ${JSON.stringify(retrievedUserWithStringify)}`;

// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
// Stap 3: toon het resultaat van beide methoden op de pagina
