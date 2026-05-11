// Mobile Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Student Management Project Alert
function showProjectInfo() {
  alert(
    "Student Management System\n\nBuilt using Java with features like:\n- Admin Login\n- Student Registration\n- View Student Records\n- Update Student Details\n- Search by Student ID\n- File Handling"
  );
}

// Restaurant Website Alert
function showWebsiteInfo() {
  alert(
    "Restaurant Website\n\nResponsive food ordering website built using HTML, CSS, and JavaScript."
  );
}

// Contact Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Message Sent Successfully!");

  contactForm.reset();
});

// Scroll Animation
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(
    ".project-card, .skill-card, .about-card"
  );

  cards.forEach((card) => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// Initial Styles for Animation
const animatedCards = document.querySelectorAll(
  ".project-card, .skill-card, .about-card"
);

animatedCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});