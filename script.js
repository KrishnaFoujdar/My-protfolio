const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Back to Top Button
window.onscroll = function () {
  document.getElementById("backToTop").style.display =
    window.scrollY > 200 ? "block" : "none";
};

document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
