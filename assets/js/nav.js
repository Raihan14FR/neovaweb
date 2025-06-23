document.addEventListener('DOMContentLoaded', function() {
  // Get current page URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Find all nav links
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Add active class to matching link
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage) {
      link.classList.add('active');
    }
  });
});