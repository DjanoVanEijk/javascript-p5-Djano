// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken

const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#tasks');
const counter = document.querySelector('#counter');

const taakToevoegen = (taak) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const tekst = document.createElement('span');
    tekst.textContent = taak;
    const verwijderKnop = document.createElement('button');
    verwijderKnop.textContent = 'Verwijder';

    checkbox.addEventListener('change', () => {
        li.classList.toggle('afgevinkt');
        toonTaken();
    });

    verwijderKnop.addEventListener('click', () => {
        li.remove();
        toonTaken();
    });

    list.appendChild(li);
     li.append(checkbox, tekst, verwijderKnop);
}

const toonTaken = () => {
    const totalTasks = list.children.length;
    const completedTasks = list.querySelectorAll('.afgevinkt').length;
    counter.textContent = `Taken: ${completedTasks} / ${totalTasks}`;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taak = input.value;
    if (taak) {
        taakToevoegen(taak);
        input.value = '';
        toonTaken();
    }
});