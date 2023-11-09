/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API = {
    apiKey: 'd8a750e9c5f24ff3bea182643230411',
  
    async fetchWeatherData(location) {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}&aqi=no`);
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
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMessage: () => (/* binding */ displayMessage),
/* harmony export */   displayWeather: () => (/* binding */ displayWeather)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");


const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherDisplay = document.querySelector('.weather-display');
const locationName = document.getElementById('locationName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const errorMessage = document.getElementById('errorMessage');
const windSpeed = document.getElementById('windSpeed');
const humidity = document.getElementById('humidity');

const displayWeather = (weatherData) => {
  locationName.textContent = weatherData.location.name;
  temperature.textContent = `Temperature: ${weatherData.current.temp_c}°C`;
  windSpeed.textContent = `Wind Speed: ${weatherData.current.wind_kph} km/h`;
  humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;
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
    weatherData = await _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchWeatherData(location); // Fetching weather data
    weatherDisplay.style.display = 'block'; // Display the weather data
    displayWeather(weatherData); // Display the fetched weather data
  } catch (error) {
    displayMessage('Failed to fetch weather data');
  }
});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RixZQUFZLEtBQUssU0FBUztBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFlLEdBQUcsRUFBQztBQUNyQjs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJCQUEyQjtBQUN2RSx5Q0FBeUMsOEJBQThCO0FBQ3ZFLHNDQUFzQyw2QkFBNkI7QUFDbkUsbURBQW1ELG1DQUFtQztBQUN0RixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQ0FBRyw2QkFBNkI7QUFDeEQsNENBQTRDO0FBQzVDLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUMwQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSSA9IHtcbiAgICBhcGlLZXk6ICdkOGE3NTBlOWM1ZjI0ZmYzYmVhMTgyNjQzMjMwNDExJyxcbiAgXG4gICAgYXN5bmMgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke3RoaXMuYXBpS2V5fSZxPSR7bG9jYXRpb259JmFxaT1ub2ApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZWF0aGVyIGRhdGEgbm90IGF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IFxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHdlYXRoZXIgZGF0YScpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEFQSTtcbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQVBJIGZyb20gJy4vYXBpLmpzJztcclxuXHJcbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25JbnB1dCcpO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnV0dG9uJyk7XHJcbmNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGlzcGxheScpO1xyXG5jb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25OYW1lJyk7XHJcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJyk7XHJcbmNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyRGVzY3JpcHRpb24nKTtcclxuY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTWVzc2FnZScpO1xyXG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZFNwZWVkJyk7XHJcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XHJcblxyXG5jb25zdCBkaXNwbGF5V2VhdGhlciA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xyXG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XHJcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2N9wrBDYDtcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BofSBrbS9oYDtcclxuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xyXG4gIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0fWA7XHJcbiAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJyc7IC8vIENsZWFyIGFueSBwcmV2aW91cyBlcnJvciBtZXNzYWdlc1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gJyc7XHJcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSAnJztcclxuICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnJztcclxufTtcclxuXHJcbmxldCB3ZWF0aGVyRGF0YTtcclxuXHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uSW5wdXQudmFsdWU7XHJcbiAgdHJ5IHtcclxuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgQVBJLmZldGNoV2VhdGhlckRhdGEobG9jYXRpb24pOyAvLyBGZXRjaGluZyB3ZWF0aGVyIGRhdGFcclxuICAgIHdlYXRoZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvLyBEaXNwbGF5IHRoZSB3ZWF0aGVyIGRhdGFcclxuICAgIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJEYXRhKTsgLy8gRGlzcGxheSB0aGUgZmV0Y2hlZCB3ZWF0aGVyIGRhdGFcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZGlzcGxheU1lc3NhZ2UoJ0ZhaWxlZCB0byBmZXRjaCB3ZWF0aGVyIGRhdGEnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheVdlYXRoZXIsIGRpc3BsYXlNZXNzYWdlIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==