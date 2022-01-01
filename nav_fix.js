const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((i) => {
  if (window.matchMedia("(min-width: 992px)").matches) {
    i.addEventListener("click", () => {
      bsCollapse.toggle();
    });
  }
});
