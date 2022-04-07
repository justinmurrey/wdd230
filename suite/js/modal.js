const open = document.getElementById("open");
const modal_containe = document.getElementById("modal_containe");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_containe.classList.add("show");
});
close.addEventListener("click", () => {
  modal_containe.classList.remove("show");
});
