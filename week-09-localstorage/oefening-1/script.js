// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
// Null-check: toon een melding als er nog niets opgeslagen is

document.getElementById('save').addEventListener('click', function() {
    const inputValue = document.getElementById('input').value;
    localStorage.setItem('savedInput', inputValue);
    alert('Invoer opgeslagen!');
});

document.getElementById('retrieve').addEventListener('click', function() {
    const savedValue = localStorage.getItem('savedInput');
    if (savedValue === null) {
        alert('Er is nog niets opgeslagen.');
    } else {
        alert('Opgeslagen invoer: ' + savedValue);
    }
});