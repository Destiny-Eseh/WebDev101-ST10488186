function openSidebar() {
  const navbar = document.getElementById('navbar');
  const overlay = document.getElementById('overlay');
  const button = document.getElementById('open-sidebar-button');

  navbar.classList.add('open');
  overlay.classList.add('show');
  button.setAttribute('aria-expanded', 'true');

  // Prevent body scroll when sidebar is open
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  const navbar = document.getElementById('navbar');
  const overlay = document.getElementById('overlay');
  const button = document.getElementById('open-sidebar-button');

  navbar.classList.remove('open');
  overlay.classList.remove('show');
  button.setAttribute('aria-expanded', 'false');

  // Restore body scroll
  document.body.style.overflow = '';
}

// Close sidebar on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeSidebar();
  }
});

// Services 

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.ue-feature-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Disable Right Click // 
document.addEventListener("contextmenu", e => e.preventDefault());
