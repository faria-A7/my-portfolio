document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.award-link');
  let currentPopup = null;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const imagePath = link.getAttribute('data-image');
      const description = link.getAttribute('data-description');
      const linksArray = JSON.parse(link.getAttribute('data-links') || '[]');

      // Remove existing popup if any
      if (currentPopup) currentPopup.remove();

      // Create new popup
      const popup = document.createElement('div');
      popup.className = 'popup';

      // Add image
      const img = document.createElement('img');
      img.src = imagePath;
      popup.appendChild(img);

      // Add description
      const desc = document.createElement('p');
      desc.textContent = description;
      popup.appendChild(desc);

      // Add links
      if (linksArray.length > 0) {
        const linksDiv = document.createElement('div');
        linksArray.forEach(linkUrl => {
          const a = document.createElement('a');
          a.href = linkUrl;
          a.textContent = linkUrl;
          a.target = '_blank';
          linksDiv.appendChild(a);
        });
        popup.appendChild(linksDiv);
      }

      // Append to body and store reference
      document.body.appendChild(popup);
      currentPopup = popup;

      // Close on click outside
      document.addEventListener('click', (closeEvent) => {
        if (!popup.contains(closeEvent.target) && closeEvent.target !== link) {
          popup.remove();
          currentPopup = null;
        }
      });
    });
  });
});