let banner = document.querySelector("#banner");
let dayOfWeek = new Date().getDay();
// if Monday or Tuesday displays this
if (dayOfWeek == 1 || dayOfWeek == 2) {
  banner.style.display = "block";
}
