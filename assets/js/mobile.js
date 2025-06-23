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
