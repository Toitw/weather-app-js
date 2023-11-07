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
    weatherData = await _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchWeatherData(location); // Fetching weather data
    displayWeather(weatherData); // Display the fetched weather data
  } catch (error) {
    displayMessage('Failed to fetch weather data');
  }
});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixZQUFZLEtBQUssU0FBUztBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFlLEdBQUcsRUFBQztBQUNyQjs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLDJCQUEyQjtBQUN2RSxtREFBbUQsbUNBQW1DO0FBQ3RGLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFHLDZCQUE2QjtBQUN4RCxpQ0FBaUM7QUFDakMsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUV5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSSA9IHtcbiAgICBhcGlLZXk6ICdkOGE3NTBlOWM1ZjI0ZmYzYmVhMTgyNjQzMjMwNDExJyxcbiAgXG4gICAgYXN5bmMgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7dGhpcy5hcGlLZXl9JnE9JHtsb2NhdGlvbn0mYXFpPW5vYCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYXRoZXIgZGF0YSBub3QgYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggd2VhdGhlciBkYXRhJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgQVBJO1xuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBUEkgZnJvbSAnLi9hcGkuanMnO1xuXG5jb25zdCBsb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uSW5wdXQnKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdXR0b24nKTtcbmNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGlzcGxheScpO1xuY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uTmFtZScpO1xuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKTtcbmNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyRGVzY3JpcHRpb24nKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvck1lc3NhZ2UnKTtcblxuY29uc3QgZGlzcGxheVdlYXRoZXIgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2N9wrBDYDtcbiAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke3dlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHR9YDtcbiAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJyc7IC8vIENsZWFyIGFueSBwcmV2aW91cyBlcnJvciBtZXNzYWdlc1xufTtcblxuY29uc3QgZGlzcGxheU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSAnJztcbiAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJyc7XG59O1xuXG5sZXQgd2VhdGhlckRhdGE7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICB0cnkge1xuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgQVBJLmZldGNoV2VhdGhlckRhdGEobG9jYXRpb24pOyAvLyBGZXRjaGluZyB3ZWF0aGVyIGRhdGFcbiAgICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyRGF0YSk7IC8vIERpc3BsYXkgdGhlIGZldGNoZWQgd2VhdGhlciBkYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheU1lc3NhZ2UoJ0ZhaWxlZCB0byBmZXRjaCB3ZWF0aGVyIGRhdGEnKTtcbiAgfVxufSk7XG5cbmV4cG9ydCB7IGRpc3BsYXlXZWF0aGVyLCBkaXNwbGF5TWVzc2FnZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9