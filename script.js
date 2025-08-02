document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.award-link');
  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      const imagePath = link.getAttribute('data-image');
      link.style.position = 'relative';
      const popup = document.createElement('div');
      popup.style.position = 'absolute';
      popup.style.bottom = '-100%';
      popup.style.left = '50%';
      popup.style.transform = 'translateX(-50%)';
      popup.style.width = '200px';
      popup.style.height = '200px';
      popup.style.backgroundImage = `url('../images/${imagePath}')`;
      popup.style.backgroundSize = 'contain';
      popup.style.backgroundRepeat = 'no-repeat';
      popup.style.opacity = '1';
      popup.style.transition = 'opacity 0.3s';
      popup.style.pointerEvents = 'none';
      popup.style.zIndex = '1000';
      link.appendChild(popup);
    });
    link.addEventListener('mouseout', () => {
      const popup = link.querySelector('div');
      if (popup) popup.remove();
    });
  });
});