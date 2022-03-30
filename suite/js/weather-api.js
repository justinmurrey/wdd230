const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=4528923&appid=730c7eedd7a467502500821344c0b4c2&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const temp = jsObject.main.temp.toFixed(0);
    document.getElementById("current-temp").textContent = temp;

    const desc = jsObject.weather[0].description;
    const speed = jsObject.wind.speed;
    const humidity = jsObject.main.humidity;
    const windChill = (temp, speed) =>
      35.74 +
      0.6215 * temp -
      35.75 * speed ** 0.16 +
      0.4275 * temp * speed ** 0.16;
    if (temp > 50 || speed > 110) {
      document.getElementById("chill").textContent = `Wind chill: N/A`;
    } else {
      document.getElementById("chill").textContent = `Wind chill: ${Math.round(
        speed
      )} F`;
    }
    document.querySelector("#icon-src").textContent = iconsrc;
    document.querySelector("#speed").textContent = `Wind Speed: ${speed} mp/h`;
    document.querySelector("#humidity").textContent = `Humidity: ${humidity}%`;

    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;
  });
