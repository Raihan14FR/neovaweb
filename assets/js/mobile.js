// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  
  if (toggle) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  }
  
  // Better touch targets
  document.querySelectorAll('a, button').forEach(el => {
    el.style.minHeight = '44px';
    el.style.minWidth = '44px';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    // Toggle menu
    navLinks.classList.toggle('active');
    // Animate hamburger
    this.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
});
