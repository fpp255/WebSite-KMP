const tolProjects = [
  "Tol Jakarta - Cikampek",
  "Tol Serpong - Balaraja"
];

const pikProjects = [
  "Cluster Residensial PIK 2",
  "Kawasan Komersial PIK 3"
];

const otherProjects1 = [
  "Pembangunan Gedung Perkantoran",
  "Renovasi Hotel"
];

const otherProjects2 = [
  "Gudang Industri",
  "Fasilitas Umum"
];

function renderProjects() {
  document.getElementById('tol-projects').innerHTML =
    tolProjects.map(p => `<li>${p}</li>`).join('');

  document.getElementById('pik-projects').innerHTML =
    pikProjects.map(p => `<li>${p}</li>`).join('');

  document.getElementById('other-projects-1').innerHTML =
    otherProjects1.map(p => `<li>${p}</li>`).join('');

  document.getElementById('other-projects-2').innerHTML =
    otherProjects2.map(p => `<li>${p}</li>`).join('');
}

renderProjects();

// Scroll Reveal Animation
function initReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // animasi sekali saja
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", function() {
  renderProjects();
  initReveal();
});

// Navbar Toggle
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Auto close saat klik menu
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}