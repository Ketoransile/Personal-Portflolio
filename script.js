function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("active");
}

function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const sidebar = document.querySelector(".sidebar");
  const navLinks = sidebar.querySelectorAll("a");

  menuButton.addEventListener("click", function (event) {
    event.preventDefault();
    showSideBar();
    event.stopPropagation();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hideSideBar();
    });
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== menuButton) {
      hideSideBar();
    }
  });

  sidebar.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
var typed = new Typed(".typing", {
  strings: ["Frontend Developer", " Web Designer", " UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
