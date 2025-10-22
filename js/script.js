document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow .slide");
  const prev = document.querySelector(".slideshow .prev");
  const next = document.querySelector(".slideshow .next");
  let slideIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  prev.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });

  next.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  showSlide(slideIndex);
});
