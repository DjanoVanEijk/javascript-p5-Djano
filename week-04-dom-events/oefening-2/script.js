// Selecteer alle vakken met querySelectorAll als houvast
// Loop met een for of loop door elk vak en voeg aan elk vak een click-event toe dat de klasse 'active' wisselt

document.querySelectorAll('.box').forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.toggle('active');
  });