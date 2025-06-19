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

// JS for Validation and AJAX //
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  const formMsg = document.getElementById("form-msg");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    formMsg.style.color = "#ff6b35";
    formMsg.textContent = "Sending...";

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        formMsg.style.color = "green";
        formMsg.textContent = "✅ Enquiry sent successfully!";
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          formMsg.style.color = "red";
          formMsg.textContent = data.errors.map(err => err.message).join(", ");
        } else {
          formMsg.style.color = "red";
          formMsg.textContent = "Something went wrong. Please try again.";
        }
      }
    } catch (err) {
      formMsg.style.color = "red";
      formMsg.textContent = "Network error. Please check your connection.";
    }
  });
});