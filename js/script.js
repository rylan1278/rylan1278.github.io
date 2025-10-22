document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");
      tabs.forEach(tab => tab.classList.remove("active"));
      document.getElementById(tabId).classList.add("active");
    });
  });

  let slideIndex = 0;
  const slides = document.querySelectorAll("#about .slide");
  const prev = document.querySelector("#about .prev");
  const next = document.querySelector("#about .next");

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
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
