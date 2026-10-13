// Fout gevonden: er stond new.json inplaats van new.json
// Oplossing: verander new naar news en de verbinding werkt weer

fetch('./news.json')
  .then(r => r.json())
  .then(messages => {
    const list = document.querySelector('#results');
    messages.forEach(message => {
      const li = document.createElement('li');
      li.textContent = message.title;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));

