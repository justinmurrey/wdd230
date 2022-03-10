const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?id=4528923&appid=730c7eedd7a467502500821344c0b4c2&units=imperial";

fetch(apiurl)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);

    const iconURL = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;

    let temp = jsonObject.main.temp;
    let speed = jsonObject.wind.speed;
    //this line is hor h2
    document.querySelector(".name").textContent = jsonObject.name;

    //this is for weather capption
    document.querySelector("figcaption").textContent =
      jsonObject.weather[0].description;

    //thisis for img src
    document.querySelector("#weathericon").setAttribute("src", iconURL);

    //this is for weather
    document.querySelector("#weathericon");

    //this is for weather description
    document.setAttribute("alt", jsonObject.weather[0].description);

    //this is for temp in F
    document.querySelector(".ctemp").textContent = temp;

    //this is for wind-speed
    document.querySelector(".speed").textContent = `Wind Speed: ${speed} mph`;
    //this is for humidity
    document.querySelector(".humiditydiv").textContent =
      jsonObject.main.humidity;

    //this is for calling windchill function
    let windChill = computeWindChill(temp, speed);

    document.querySelector(".chill").textContent = `Wind Chill: ${windChill}`;
  });
function windChill(temp, speed) {
  return Math.round(
    ((f =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16)) *
      100) /
      100
  );
}

/*let t = parseFloat(document.querySelector("#temp").textContent);
let s = parseFloat(document.querySelector("#speed").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
  windchill = windChill(t, s);
  windchill = `${windchill}℉`;
} else {
  windchill = "N/A";
}
// output
document.querySelector("#wind").innerHTML = windchill;

function windChill(temp, speed) {
  return Math.round(
    ((f =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16)) *
      100) /
      100
  );
}*/
