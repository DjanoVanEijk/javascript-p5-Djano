fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur
    const characters = data.results;
    const charactersContainer = document.querySelector('#characters');

    for(const character of characters){
      const article = document.createElement('article');
      const name = document.createElement('p');
      name.textContent = character.name
      const image = document.createElement('img')
       image.src = character.image;
       image.alt = character.name;

       article.append(name, image);
       charactersContainer.append(article);
    }

  })
  .catch(error => console.error('Fout:', error));


      // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters