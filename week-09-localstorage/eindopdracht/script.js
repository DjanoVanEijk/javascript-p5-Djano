let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const resultsContainer = document.getElementById('results');

const showItems = (items) => {
  resultsContainer.replaceChildren();

  items.forEach((item) => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const name = document.createElement('h2');
    const button = document.createElement('button');

    const isFavorite = favorites.includes(item.name);

    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`;
    img.alt = item.name;

    name.textContent = item.name;

    button.className = 'favorite-btn';
    if (isFavorite) {
      button.classList.add('is-favorite');
    }
    button.textContent = isFavorite ? 'Verwijder favoriet' : 'Favoriet';

    button.addEventListener('click', () => {
      if (favorites.includes(item.name)) {
        favorites = favorites.filter((favorite) => favorite !== item.name);
      } else {
        favorites.push(item.name);
      }

      saveFavorites();
      showItems(items);
    });

    article.append(img, name, button);
    resultsContainer.appendChild(article);
  });
};

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('#loading').textContent = '';
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
    }));
    showItems(allPokemon);
  })
  .catch((error) => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

document.querySelector('#show-all').addEventListener('click', () => {
  showItems(allPokemon);
});

document.querySelector('#show-favorites').addEventListener('click', () => {
  const favoritePokemon = allPokemon.filter((pokemon) => favorites.includes(pokemon.name));
  showItems(favoritePokemon);
});
