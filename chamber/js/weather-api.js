const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=730c7eedd7a467502500821344c0b4c2&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById("current-temp").textContent =
      jsObject.main.temp.toFixed(0);
    const desc = jsObject.weather[0].description;
    document.querySelector("#icon-src").textContent = iconsrc;

    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;
  });
