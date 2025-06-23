document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      
      // Show success message (you can replace this with actual form submission)
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
      
      // Add animation to reset form
      const formGroups = document.querySelectorAll('.form-group');
      formGroups.forEach(group => {
        group.classList.remove('animated', 'fadeInUp');
        void group.offsetWidth; // Trigger reflow
        group.classList.add('animated', 'fadeInUp');
      });
    });
  }
}); 