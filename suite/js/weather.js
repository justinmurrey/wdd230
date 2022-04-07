const weatherURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=39.9274&lon=-82.0041&exclude=minutely,alerts&appid=7fa4b2c77bd9f2327e12c5154664f731";

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);

    let dt1 = jsonObject.daily[0].dt;

    let day1 = new Date(dt1 * 1000);

    document.querySelector("#wdays").textContent = day1.toLocaleString("en-us");

    document.querySelector(
      "#temp"
    ).textContent = `${jsonObject.daily[0].temp.day} °F`;

    let dt2 = jsonObject.daily[1].dt;
    let day2 = new Date(dt2 * 1000);

    document.querySelector("#wday1").textContent = day2.toLocaleString("en-us");
    document.querySelector(
      "#temp1"
    ).textContent = `${jsonObject.daily[1].temp.day} °F`;

    let dt3 = jsonObject.daily[2].dt;
    let day3 = new Date(dt3 * 1000);

    document.querySelector("#wday2").textContent = day3.toLocaleString("en-us");
    document.querySelector(
      "#temp2"
    ).textContent = `${jsonObject.daily[2].temp.day} °F`;
  });
