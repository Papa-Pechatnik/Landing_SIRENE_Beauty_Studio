document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background-nav');
    const hamburger = document.querySelector('.hamburger');
    const menuOverlay = document.querySelector('.menu-overlay');
    const itemLinks = document.querySelectorAll('.header-nav .nav-item__link');

  
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        background?.classList.toggle('open');
        hamburger.classList.toggle('open');
        menuOverlay?.classList.toggle('open');
      });
    }
  
    if (background) {
      background.addEventListener('click', (event) => {
        // Проверяем, что клик произошел непосредственно по фону, а не по дочернему элементу
        if (event.target === background) {
          background.classList.toggle('open');
          hamburger?.classList.toggle('open');
          menuOverlay?.classList.toggle('open');
        }
      });
    }
  
    if (menuOverlay) {
      menuOverlay.addEventListener('click', () => {
        background?.classList.toggle('open');
        hamburger?.classList.toggle('open');
        menuOverlay.classList.toggle('open');
      });
    }
  
    itemLinks.forEach((link) => {
      link.addEventListener('click', () => {
        background?.classList.toggle('open');
        hamburger?.classList.toggle('open');
        menuOverlay?.classList.toggle('open');
      });
    });
  });