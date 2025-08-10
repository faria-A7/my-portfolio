function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close if clicking outside the modal box
window.onclick = function (event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}






document.addEventListener("DOMContentLoaded", () => {
  const typewriters = document.querySelectorAll(".typewriter");

  function typeText(el, text, delay = 100, callback = null) {
    let i = 0;
    el.textContent = ""; // clear before starting

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

  // Sequential typing: name first, then title
  if (typewriters.length >= 2) {
    const [nameEl, titleEl] = typewriters;
    const nameText = nameEl.dataset.text;
    const titleText = titleEl.dataset.text;

    typeText(nameEl, nameText, 100, () => {
      setTimeout(() => {
        typeText(titleEl, titleText, 100);
      }, 500);
    });
  }
});



AOS.init({
    duration: 800, // animation duration in ms
    once: true     // only animate once
  });


  function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Optional: Close modal if clicking outside the modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};




