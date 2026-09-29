// Selecteer alle vakken met querySelectorAll als houvast
// Loop met een for of loop door elk vak en voeg aan elk vak een click-event toe dat de klasse 'active' wisselt

const vakken = document.querySelectorAll('.box');

for (const vak of vakken) {
    vak.addEventListener('click', () => {
        vak.classList.toggle('active');
    });
}