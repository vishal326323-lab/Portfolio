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

/* CONTACT FORM */
// Just show the popup
document.addEventListener("DOMContentLoaded", function() {
      const form = document.getElementById("contact-form");

      form.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
          Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Please fill all fields!"
          });
          return;
        }

        Swal.fire({
          icon: "success",
          title: "Message sent successfully!",
          showConfirmButton: false,
          timer: 2000
        });
        form.reset();
      });
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
