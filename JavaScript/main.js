const openButton = document.getElementById('open-sidebar-button');
const navbar = document.querySelector('header .navigation');
const media = window.matchMedia("(max-width: 1040px)");

function updateNavbar(e) {
  const isMobile = e.matches;
  if (isMobile) {
    navbar.setAttribute('inert', '');
  } else {
    navbar.classList.remove('show');
    openButton.classList.remove('active');
    navbar.removeAttribute('inert');
  }
}

media.addEventListener('change', updateNavbar);
updateNavbar(media);

openButton.addEventListener('click', () => {
  const isOpen = navbar.classList.contains('show');
  navbar.classList.toggle('show');
  openButton.classList.toggle('active');
  if (isOpen) {
    navbar.setAttribute('inert', '');
    openButton.setAttribute('aria-expanded', 'false');
  } else {
    navbar.removeAttribute('inert');
    openButton.setAttribute('aria-expanded', 'true');
  }
});
