// Video autoplay control
document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('.video-container video');
  video.play().catch(e => console.log("Autoplay prevented:", e));
  
  // Fallback image if video doesn't load
  video.addEventListener('error', function() {
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = '<img src="assets/images/banner2-fallback.jpg" alt="About Banner">';
  });
});