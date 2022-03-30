const fapiURL = (fapiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=7fa4b2c77bd9f2327e12c5154664f731");
fetch(fapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const time = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00"));
    console.log(time);
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = 0;
    time.forEach((forecast) => {
      if (day > 2) return;
      let thedate = new Date(forecast.dt_txt);
      const imagesrc =
        "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
      const desc = forecast.weather[0].description;
      document.querySelector(`#weekday${day + 1}`).textContent =
        weekdays[thedate.getDay()];
      document.querySelector(`#ftemp${day + 1}`).textContent =
        forecast.main.temp.toFixed(0) + "°F";
      document.querySelector(`#icon${day + 1}`).setAttribute("src", imagesrc);
      document.querySelector(`#icon${day + 1}`).setAttribute("alt", desc);
      day++;
    });
  });
