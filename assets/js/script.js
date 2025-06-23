// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function() {
  navList.classList.toggle('active');
  this.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navList.classList.remove('active');
    menuToggle.querySelector('i').classList.remove('fa-times');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Active menu item based on scroll position
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});