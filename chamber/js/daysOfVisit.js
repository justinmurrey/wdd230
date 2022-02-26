let numOfVisits = document.querySelector(".daysOfVisit");

let numOfVisits1 = Number(window.localStorage.getItem("visits"));
let lastVisits = Number(window.localStorage.getItem("lastVisits"));

const NUMS = 1000 * 60 * 60 * 24;

let daysAmong = Date.now() - lastVisits;

let numOfDays = Math.ceil(daysAmong / NUMS);

localStorage.setItem("lastVisits", Date.now());

if (numOfVisits1 != 0) {
  numOfVisits.textContent =
    "It's been " + numOfDays + " day(s) since your last visit.";
} else {
  numOfVisits.textContent = "This is your first page visit.";
}

numOfVisits1++;
localStorage.setItem("visits", numOfVisits1);
