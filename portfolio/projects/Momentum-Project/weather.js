const API__KEY = "e8bd6a067fb50e0f251f385eacd2f9da";
const coords = "coords";
const weather = document.querySelector(".js__weather");

function getWeather(lat, lon) {
  var Dday = new Date();

  var week = ["일", "월", "화", "수", "목", "금", "토"];

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API__KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;

      weather.innerText = `${temperature}-${place}-${week[Dday.getDay()]}요일`;
    });
}
function saveCoords(coordsObj) {
  localStorage.setItem(coords, JSON.stringify(coordsObj));
}

function hendleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };

  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
function hendleGeoEroor() {
  console.log("어디인 줄 모르겠네요.");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(hendleGeoSucces, hendleGeoEroor);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(coords);
  if (loadedCords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
