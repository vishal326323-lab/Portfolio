// ================= MOBILE NAVBAR =================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ================= PROJECT ALERTS =================

function showProjectInfo() {

  Swal.fire({
    title: "Student Management System",
    html: `
      <p>Built using Java with features like:</p>

      <ul style="text-align:left; margin-top:15px;">
        <li>✔ Admin Login</li>
        <li>✔ Student Registration</li>
        <li>✔ View Student Records</li>
        <li>✔ Update Student Details</li>
        <li>✔ Search by Student ID</li>
        <li>✔ File Handling</li>
      </ul>
    `,
    icon: "info",
    confirmButtonColor: "#38bdf8",
    background: "#0f172a",
    color: "#ffffff"
  });

}

function showWebsiteInfo() {

  Swal.fire({
    title: "Restaurant Website",
    text: "Responsive food ordering website built using HTML, CSS, and JavaScript.",
    icon: "success",
    confirmButtonColor: "#38bdf8",
    background: "#0f172a",
    color: "#ffffff"
  });

}

/* CONTACT FORM */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");

    if (form) {

        form.addEventListener("submit", async function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validation
            if (name === "" || email === "" || message === "") {

                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "Please fill all fields!"
                });

                return;
            }

            // Form Data
            const formData = new FormData(form);

            try {

                // Send to FormSubmit
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                // Success Popup
                if (response.ok) {

                    Swal.fire({
                        icon: "success",
                        title: "Message sent successfully!",
                        text: "Thank you for contacting me.",
                        confirmButtonColor: "#38bdf8"
                    });

                    form.reset();

                } else {

                    Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text: "Message could not be sent."
                    });

                }

            } catch (error) {

                Swal.fire({
                    icon: "error",
                    title: "Network Error!",
                    text: "Please try again later."
                });

            }

        });

    }

});

// ================= SCROLL ANIMATION =================

window.addEventListener("scroll", () => {

  const cards = document.querySelectorAll(
    ".project-card, .skill-card, .about-card, .cert-card"
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

// ================= INITIAL ANIMATION =================

const animatedCards = document.querySelectorAll(
  ".project-card, .skill-card, .about-card, .cert-card"
);

animatedCards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";

});
