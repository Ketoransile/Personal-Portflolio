// document.addEventListener("DOMContentLoaded", () => {
//   // Smooth scrolling
//   const scrollLinks = document.querySelectorAll(
//     ".nav-links a, #lets-talk-button"
//   );

//   scrollLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       const targetId = link.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     });
//   });

//   // Toggle mobile menu
//   const menuIcon = document.getElementById("menu-icon");
//   const navLinks = document.querySelector(".nav-links");

//   menuIcon.addEventListener("click", () => {
//     navLinks.classList.toggle("open");
//   });

//   // Close mobile menu on link click
//   navLinks.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", () => {
//       navLinks.classList.remove("open");
//     });
//   });

//   // Intersection Observer for scroll animations
//   const observerOptions = {
//     threshold: 0.1,
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//       }
//     });
//   }, observerOptions);

//   const sections = document.querySelectorAll(".about, .services, .skills");
//   sections.forEach((section) => {
//     observer.observe(section);
//   });

//   // AOS initialization
//   AOS.init({
//     easing: "ease",
//     duration: 1000,
//     once: true,
//   });

//   // Scroll reveal animation
//   ScrollReveal().reveal(".home-elements", {
//     duration: 1000,
//     origin: "top",
//     distance: "80px",
//     delay: 200,
//   });

//   ScrollReveal().reveal(".about-first", {
//     duration: 1000,
//     origin: "left",
//     distance: "80px",
//     delay: 200,
//   });

//   ScrollReveal().reveal(".services-list", {
//     duration: 1000,
//     origin: "bottom",
//     distance: "80px",
//     delay: 200,
//   });

//   ScrollReveal().reveal(".skills-section-details", {
//     duration: 1000,
//     origin: "right",
//     distance: "80px",
//     delay: 200,
//   });

//   ScrollReveal().reveal(".project-card-container", {
//     duration: 1000,
//     origin: "top",
//     distance: "80px",
//     delay: 200,
//   });

//   ScrollReveal().reveal(".contact-container", {
//     duration: 1000,
//     origin: "bottom",
//     distance: "80px",
//     delay: 200,
//   });

//   // Header scroll effect
//   const header = document.querySelector(".header");
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });
// });
function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
