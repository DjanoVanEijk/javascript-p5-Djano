let allPokemon = [];
const pokemonContainer = document.getElementById('pokemon-list');
const counter = document.getElementById('counter');
const searchBar = document.getElementById('search-bar');

// De API geeft een object terug met een 'results' array
// Elk item heeft een 'name' property
// Gebruik console.log(data) om de structuur te bekijken

// De afbeelding van een Pokémon staat op:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
// Sla het id op via de index bij het laden: { ...pokemon, id: index + 1 }

function renderPokemon(pokemonList) {
  pokemonContainer.replaceChildren();
  counter.textContent = `Aantal resultaten: ${pokemonList.length}`;

  for (const pokemon of pokemonList) {
    const article = document.createElement('article');
    const name = document.createElement('p');
    name.textContent = pokemon.name;

    const image = document.createElement('img');
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    image.alt = pokemon.name;

    article.append(name, image);
    pokemonContainer.append(article);
  }
}

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Bekijk de structuur
    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1
    }));

    renderPokemon(allPokemon);
  })
  .catch(error => console.error('Fout:', error));

searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.trim().toLowerCase();
  const filteredPokemon = allPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  renderPokemon(filteredPokemon);
});
