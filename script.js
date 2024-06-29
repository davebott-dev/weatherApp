const weatherIcon = document.getElementById('weatherIcon');
const temp = document.getElementById('temp');
const currentLocation = document.getElementById('location');
const humidityValue = document.getElementById('humidityValue');
const windValue = document.getElementById('windValue');


async function getWeather() {

  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=1c8dd50b5d5d486e825124345242006&q=London&aqi=no', { mode: "cors" });

  const weatherData = await response.json();


  weatherIcon.src = 'https:'+ weatherData.current.condition.icon;
  console.log(weatherData)

  temp.textContent = weatherData.current.temp_f;

  currentLocation.textContent = weatherData.location.name;

  humidityValue.textContent = weatherData.current.humidity + '%';

  windValue.textContent = weatherData.current.wind_mph + ' mph';

}

getWeather();

const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('search');

searchBtn.addEventListener("click", () => {
  if (tempUnit.innerText.includes('°C')) {
    const convertedTemp = ((9 / 5 * (Number(temp.innerText)) + 32));
    const roundedTemp = convertedTemp.toFixed(1);
    temp.textContent = roundedTemp;
    tempUnit.innerText = '°F';
  }
  fetch('https://api.weatherapi.com/v1/current.json?key=1c8dd50b5d5d486e825124345242006&q=' + searchBar.value + '&aqi=no', { mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      weatherIcon.src = 'https:' + response.current.condition.icon;
      temp.textContent = response.current.temp_f;
      currentLocation.textContent = response.location.name;
      humidityValue.textContent = response.current.humidity + '%';
      windValue.textContent = response.current.wind_mph + ' mph';
      searchBar.value = "";
    })

})

const tempToggle = document.getElementById('tempToggle');
const tempUnit = document.getElementById('tempUnit');


tempToggle.addEventListener("click", () => {
  if (tempUnit.innerText.includes('°F')) {
    const convertedTemp = (5 / 9 * ((Number(temp.innerText)) - 32));
    const roundedTemp = convertedTemp.toFixed(1);
    temp.textContent = roundedTemp;
    tempUnit.innerText = '°C';
  } else {
    const convertedTemp = ((9 / 5 * (Number(temp.innerText)) + 32));
    const roundedTemp = convertedTemp.toFixed(1);
    temp.textContent = roundedTemp;
    tempUnit.innerText = '°F';
  }

});

const lightDark = document.getElementById('lightDark');
const html = document.querySelector('html');

lightDark.addEventListener('click', () => {
  if (html.className == "htmlDark") {
    html.classList.remove('htmlDark');
    html.classList.add('htmlLight');
  } else {
    html.classList.remove('htmlLight');
    html.classList.add('htmlDark');
  }

})


