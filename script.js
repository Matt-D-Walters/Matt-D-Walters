// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Add smooth scrolling to anchor links in the navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Add an event listener to the "About Me" section to toggle more information
    const aboutSection = document.getElementById('about');
    aboutSection.addEventListener('click', function () {
      // Toggle the class 'expanded' on the about section
      this.classList.toggle('expanded');
    });
  
  
  });
  