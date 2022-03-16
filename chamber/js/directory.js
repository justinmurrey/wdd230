const requestURL =
  "https://justinmurrey.github.io/wdd230/chamber/js/directory.json";

const listview = document.querySelector(".list-view");
const gridview = document.querySelector(".grid-view");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const companies = jsonObject["companies"];

    companies.forEach(viewInList);
    companies.forEach(viewInGrid);
  });

function viewInList(company) {
  let card = document.createElement("section");
  let title = document.createElement("h2");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("p");

  title.textContent = company.name;
  address.textContent = company.address;
  phone.textContent = company.phone;
  website.textContent = company.website;

  card.appendChild(title);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  title.setAttribute("class", "title-dir");
  listview.appendChild(card);
}

function viewInGrid(company) {
  let card = document.createElement("section");
  let title = document.createElement("h2");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("p");
  let image = document.createElement("img");

  title.textContent = company.name;
  address.textContent = company.address;
  phone.textContent = company.phone;
  website.textContent = company.website;

  image.setAttribute("src", company.imageurl);
  title.setAttribute("class", "title-dir");

  card.appendChild(title);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);
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
