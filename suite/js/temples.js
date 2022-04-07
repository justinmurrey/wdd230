const requestURL =
  "https://justinmurrey.github.io/wdd230/suite/js/temples.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const temples = jsonObject["temples"];

    temples.forEach(viewInList);
    temples.forEach(viewInGrid);
  });

function viewInList(temples) {
  let card = document.createElement("section");
  let title = document.createElement("h2");
  let locations = document.createElement("p");
  let dedicated = document.createElement("p");
  let imageUrl = document.createElement("p");

  title.textContent = temples.templeName;
  locations.textContent = temples.locations;
  dedicated.textContent = temples.dedicated;
  imageUrl.textContent = temples.imageUrl;

  card.appendChild(title);
  card.appendChild(locations);
  card.appendChild(dedicated);
  card.appendChild(imageUrl);

  title.setAttribute("class", "title-dir");
  listview.appendChild(card);
}

function viewInGrid(temples) {
  let card = document.createElement("section");
  let title = document.createElement("h2");
  let locations = document.createElement("p");
  let dedicated = document.createElement("p");
  let imageUrl = document.createElement("p");
  let image = document.createElement("img");

  title.textContent = temples.templeName;
  locations.textContent = temples.locations;
  dedicated.textContent = temples.dedicated;
  imageUrl.textContent = temples.imageUrl;

  image.setAttribute("src", temples.imageurl);
  title.setAttribute("class", "title-dir");

  card.appendChild(title);
  card.appendChild(locations);
  card.appendChild(dedicated);
  card.appendChild(imageUrl);
  card.appendChild(image);

  gridview.appendChild(card);
}

let buttons = document.querySelectorAll(".links ul li");
let liViews = document.querySelectorAll(".view");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (item) {
      item.classList.remove("active");
    });
    button.classList.add("active");

    let viewList = button.getAttribute("data-view");

    liViews.forEach(function (view) {
      view.style.display = "none";
    });

    if (viewList == "list-view") {
      document.querySelector("." + viewList).style.display = "block";
    } else {
      document.querySelector("." + viewList).style.cssText =
        "display: grid; grid-template-columns: repeat(3,1fr)";
    }
  });
});
