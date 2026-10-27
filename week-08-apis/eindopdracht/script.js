// API_KEY wordt geladen vanuit config.js (zie config.example.js voor instructies)

const weerContainer = document.getElementById('weather-info')

const showWeather = (data) => {
  weerContainer.replaceChildren();
  const weerKaart = document.createElement('article')
  const stadsnaam = document.createElement('h2')
  const weericon = document.createElement('img')
  const temperatuur = document.createElement('p')
  const gevoelstemperatuur = document.createElement('p')
  const luchtvochtigheid = document.createElement('p')
  const windsnelheid = document.createElement('p')

stadsnaam.textContent = data.name;
weericon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
weericon.alt = data.weather[0].description;
temperatuur.textContent = `Temperatuur: ${Math.round(data.main.temp)}°C`;
gevoelstemperatuur.textContent = `Gevoelstemperatuur: ${Math.round(data.main.feels_like)}°C`;
luchtvochtigheid.textContent = `Luchtvochtigheid: ${data.main.humidity}%`;
windsnelheid.textContent = `Windsnelheid: ${data.wind.speed} m/s`;

weerKaart.append(
  weericon,
  stadsnaam,
  temperatuur,
  gevoelstemperatuur,
  luchtvochtigheid,
  windsnelheid
);
weerContainer.append(weerKaart);
};

const getWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      showWeather(data);
    })
    .catch(error => console.error('Fout bij ophalen van het weer:', error));
};

document.querySelector('#search-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const cityInput = document.querySelector('#city-input');
  getWeather(cityInput.value.trim());
  cityInput.value = '';
});
