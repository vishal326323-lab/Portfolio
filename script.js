// ================= MOBILE NAVBAR =================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ================= PROJECT ALERT =================

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

// ================= CONTACT FORM =================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {

            name: document.getElementById("name").value.trim(),

            email: document.getElementById("email").value.trim(),

            message: document.getElementById("message").value.trim()

        };

        // Validation

        if (!data.name || !data.email || !data.message) {

            Swal.fire({

                icon: "warning",
                title: "Oops...",
                text: "Please fill all fields!",
                confirmButtonColor: "#38bdf8"

            });

            return;

        }

        try {

            const response = await fetch("http://localhost:5000/send-sms", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(data)

            });

            if (response.ok) {

                // SUCCESS POPUP

                Swal.fire({

                    icon: "success",

                    title: "Message Sent Successfully!",

                    text: "Thank you for contacting me.",

                    confirmButtonColor: "#38bdf8",

                    background: "#0f172a",

                    color: "#ffffff",

                    timer: 2500,

                    showConfirmButton: false

                });

                form.reset();

            } else {

                Swal.fire({

                    icon: "error",

                    title: "Failed!",

                    text: "SMS not sent.",

                    confirmButtonColor: "#38bdf8"

                });

            }

        } catch (error) {

            console.log(error);

            Swal.fire({

                icon: "error",

                title: "Server Error!",

                text: "Make sure node server is running.",

                confirmButtonColor: "#38bdf8"

            });

        }

    });

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
