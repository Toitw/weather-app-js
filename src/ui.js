import API from './api.js';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherDisplay = document.querySelector('.weather-display');
const locationName = document.getElementById('locationName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const errorMessage = document.getElementById('errorMessage');

const displayWeather = (weatherData) => {
  locationName.textContent = weatherData.location.name;
  temperature.textContent = `Temperature: ${weatherData.current.temp_c}°C`;
  weatherDescription.textContent = `Description: ${weatherData.current.condition.text}`;
  errorMessage.textContent = ''; // Clear any previous error messages
};

const displayMessage = (message) => {
  errorMessage.textContent = message;
  locationName.textContent = '';
  temperature.textContent = '';
  weatherDescription.textContent = '';
};

let weatherData;

searchButton.addEventListener('click', async () => {
  const location = locationInput.value;
  try {
    weatherData = await API.fetchWeatherData(location); // Fetching weather data
    displayWeather(weatherData); // Display the fetched weather data
  } catch (error) {
    displayMessage('Failed to fetch weather data');
  }
});

export { displayWeather, displayMessage };
