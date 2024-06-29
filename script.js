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

function resetForm() {
  document.querySelector("form").reset();
  document.getElementById("success-message").style.display = "none";
  document.querySelector(".contact-inputs").style.display = "block";
}
function resetForm() {
  document.querySelector("form").reset();
  document.getElementById("success-message").style.display = "none";
  document.querySelector(".contact-inputs").style.display = "block";
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch("/", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        document.querySelector(".contact-inputs").style.display = "none";
        document.getElementById("success-message").style.display = "block";
        this.reset();
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error submitting the form. Please try again.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a, .sidebar a");

  function updateActiveLink() {
    let current = "";
    let found = false;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        pageYOffset >= sectionTop - sectionHeight / 3 &&
        pageYOffset < sectionTop + sectionHeight - sectionHeight / 3 &&
        !found
      ) {
        current = section.getAttribute("id");
        found = true;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);

  updateActiveLink();
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSection() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop <= windowHeight * 0.8) {
        section.classList.add("reveal");
      }
    });
  }

  window.addEventListener("scroll", revealSection);
  revealSection();
});
