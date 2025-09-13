// ================= Modal Functions =================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "block";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// ================= On Page Load =================
document.addEventListener("DOMContentLoaded", () => {
  // ---- Typewriter Effect ----
  const typewriters = document.querySelectorAll(".typewriter");

  function typeText(el, text, delay = 100, callback = null) {
    let i = 0;
    el.textContent = "";

    const interval = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        if (callback) callback();
      }
    }, delay);
  }

  if (typewriters.length >= 2) {
    const [nameEl, titleEl] = typewriters;
    typeText(nameEl, nameEl.dataset.text, 100, () => {
      setTimeout(() => {
        typeText(titleEl, titleEl.dataset.text, 100);
      }, 500);
    });
  }

  // ---- Theme Toggle (Dark default, Light optional) ----
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Default: Dark mode (unless user previously chose light)
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "🌙";
  } else {
    body.classList.remove("light-mode");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
      } else {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // ---- Scroll Animation (AOS) ----
  AOS.init({
    duration: 800,
    once: true,
  });
});

// ================= Active Navbar Highlight =================
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
