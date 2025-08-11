// Handle mobile nav toggle with ARIA updates
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navlinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

// Product carousel functionality
document.querySelectorAll('.carousel-container').forEach(container => {
  const carousel = container.querySelector('.product-carousel');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  const items = carousel.querySelectorAll('.product-item');

  // Approximate product card width including gap
  const itemWidth = 240;
  const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);

  // Hide both buttons if there are not enough items to scroll
  if (items.length <= visibleItems) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    return
  }

  // Initially hide the "previous" button until the user scrolls right
  prevBtn.style.display = 'none';

  // Scroll right
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });

    // Show "previous" button after the first right scroll
    prevBtn.style.display = 'block';
  });

  // Scroll left
  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });

    // Hide "previous" button again if we return to the start
    if (carousel.scrollLeft - itemWidth <= 0) {
      prevBtn.style.display = 'none';
    }
  });
});
