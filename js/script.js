// Tab switching
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const menuItems = document.querySelectorAll(".menu li");

  // ---- Effect 2: Typing Effect ----
  const typingEl = document.querySelector(".typing");
  const text = "This text is typing by itself. . . . . isn't that so weird... get this ghost out of here.";
  let i = 0;
  let typingTimeout;

  function typeEffect() {
    if (i < text.length) {
      typingEl.textContent += text.charAt(i);
      i++;
      typingTimeout = setTimeout(typeEffect, 100);
    }
  }

  function startTyping() {
    clearTimeout(typingTimeout);
    typingEl.textContent = "";
    i = 0;
    typeEffect();
  }

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");

      // Hide all tabs
      tabs.forEach(tab => tab.classList.remove("active"));

      // Show chosen tab
      const activeTab = document.getElementById(tabId);
      activeTab.classList.add("active");

      // If the active tab has a typing element, start typing
      if (activeTab.querySelector(".typing")) {
        startTyping();
      }
    });
  });

  // ---- Effect 1: Slideshow ----
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

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

  // ---- Effect 3: Collapsible Section ----
  const collBtn = document.querySelector(".collapsible");
  const collContent = document.querySelector(".collapse-content");
  collBtn.addEventListener("click", () => {
    collContent.style.display =
      collContent.style.display === "block" ? "none" : "block";
  });

  // ---- Effect 4: Hover is CSS only ----

  // ---- Effect 5: Form Validation ----
  const form = document.getElementById("demoForm");
  const msg = document.getElementById("formMsg");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      msg.textContent = "Name cannot be empty!";
      msg.style.color = "red";
    } else {
      msg.style.color = "green";
      msg.textContent = `Hello, ${name}! Form submitted successfully.`;
    }
  });
});
