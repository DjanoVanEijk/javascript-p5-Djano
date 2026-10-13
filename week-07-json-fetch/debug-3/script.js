// Fout gevonden: er waren geen kommas in het json bestand, er stond result in plaats van results, er zat geen .json achter users, append had het verkeerde ding en er was geen script tag in de html
// Oplossing: voeg kommas toe in het json bestand, verbeter naar results, verbeter naar users.json, verbeter append naar li en voeg een script tag toe

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
