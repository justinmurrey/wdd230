const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
}

const imgOptions = {};

const imgObsever = new IntersectionObserver((entries, imgOptions) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObsever.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObsever.observe(image);
});
