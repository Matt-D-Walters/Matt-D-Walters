// script.js
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a, .title-links a');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

function openCVInNewTab() {
  window.open("https://docs.google.com/document/d/1LEyzJIwCVkbm2w4WPKTUWwz0LkKh8gMjruibQ5uFNkQ/edit", "_blank");
}
