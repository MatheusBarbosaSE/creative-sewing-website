// Handle mobile nav toggle with ARIA updates
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navlinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    // Toggle class to show/hide nav
    navLinks.classList.toggle('show');

    // Update aria-expanded for accessibility
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });
}
