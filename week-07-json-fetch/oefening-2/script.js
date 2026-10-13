fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    for (const movie of movies) {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Auteur:</strong> ${movie.director}</p>
        <p><strong>Jaar:</strong> ${movie.year}</p>
      `;
      document.getElementById('films').appendChild(movieElement);
    }
  })
  .catch(error => console.error('Fout:', error));
