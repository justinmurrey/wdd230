let banner = document.querySelector("#banner");
let dayOfWeek = new Date().getDay();
// if Monday or Tuesday displays this
if (dayOfWeek == 2 || dayOfWeek == 3) {
  banner.style.display = "block";
}
