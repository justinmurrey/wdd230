const requestURL =
  "https://justinmurrey.github.io/wdd230/chamber/js/directory.json";
// Get the JSON data
//random positions inside the JSON
//this will allow you to change the companies being displayed in your spotlights
let positions = [0, 1, 2];
//This function will take the array and will randonmly choose a position
function ChoiceRan(chs) {
  return chs[Math.floor(chs.length * Math.random())];
}

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const spotlights = jsObject["companies"];
    for (let i = 0; i < 1; i++) {
      let choices = ChoiceRan(positions);
      let title = document.createElement("name");
      let image = document.createElement("imageu");
      let description = document.createElement("p");

      title.textContent = spotlights[choices].name;
      description.textContent = spotlights[choices].description;

      image.setAttribute("src", spotlights[choices].image);
      image.setAttribute("alt", spotlights[choices].name);

      document.getElementById("div").appendChild(title);
      document.getElementById("div").appendChild(image);
      document.getElementById("div").appendChild(description);
    }
  });
