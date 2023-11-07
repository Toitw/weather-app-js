const API = {
    apiKey: 'd8a750e9c5f24ff3bea182643230411',
  
    async fetchWeatherData(location) {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}&aqi=no`);
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        const data = await response.json(); 
        return data;
      } catch (error) {
        throw new Error('Failed to fetch weather data');
      }
    }
  };
  
  export default API;
  