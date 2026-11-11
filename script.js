/* =====================================================
    ONE VOI
   JAVASCRIPT FILE

   Vanilla JavaScript only.
   No libraries or frameworks are used.
   ===================================================== */


/* =====================================================
   1. MOBILE HAMBURGER MENU
   ===================================================== */

const menuToggle =
    document.querySelector("#menuToggle");

const navLinks =
    document.querySelector("#navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("show");

        }
    );

}


/* Close mobile menu when a link is clicked */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.classList.remove("show");

        }
    );

});


/* =====================================================
   2. DARK / LIGHT MODE
   ===================================================== */

const themeToggle =
    document.querySelector("#themeToggle");


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                themeToggle.textContent = "☀️";

            } else {

                themeToggle.textContent = "🌙";

            }

        }
    );

}


/* =====================================================
   3. ACCORDION
   ===================================================== */

const accordionHeaders =
    document.querySelectorAll(
        ".accordion-header"
    );


accordionHeaders.forEach(
    function (header) {

        header.addEventListener(
            "click",
            function () {

                const item =
                    header.parentElement;


                item.classList.toggle("open");


                const symbol =
                    header.querySelector("span");


                if (
                    item.classList.contains("open")
                ) {

                    symbol.textContent = "−";

                } else {

                    symbol.textContent = "+";

                }

            }
        );

    }
);


/* =====================================================
   4. ACTIVITY FILTER
   ===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const activityCards =
    document.querySelectorAll(
        ".activity-card"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                /*
                 Get the category selected
                 by the visitor.
                */

                const selectedCategory =
                    button.dataset.filter;


                /* Change active button */

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active-filter"
                        );

                    }
                );


                button.classList.add(
                    "active-filter"
                );


                /* Filter activities */

                activityCards.forEach(
                    function (card) {

                        const category =
                            card.dataset.category;


                        if (
                            selectedCategory === "all" ||
                            selectedCategory === category
                        ) {

                            card.style.display = "";

                        } else {

                            card.style.display = "none";

                        }

                    }
                );

            }
        );

    }
);


/* =====================================================
   5. COUNTDOWN TIMER
   ===================================================== */


/*
   Set the date of the next event.

   Change this date to the actual event date
   for your project.
*/

const eventDate =
    new Date(
        "December 20, 2026 09:00:00"
    ).getTime();


const countdownTimer =
    setInterval(function () {

        const currentTime =
            new Date().getTime();


        const difference =
            eventDate - currentTime;


        if (difference <= 0) {

            clearInterval(countdownTimer);


            const countdown =
                document.querySelector(
                    "#countdown"
                );


            if (countdown) {

                countdown.innerHTML =
                    "<h3>The event has started!</h3>";

            }

            return;

        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference %
                    (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (difference %
                    (1000 * 60 * 60)) /
                    (1000 * 60)
            );


        const seconds =
            Math.floor(
                (difference %
                    (1000 * 60)) /
                    1000
            );


        const daysElement =
            document.querySelector("#days");


        const hoursElement =
            document.querySelector("#hours");


        const minutesElement =
            document.querySelector("#minutes");


        const secondsElement =
            document.querySelector("#seconds");


        if (daysElement) {

            daysElement.textContent =
                String(days).padStart(2, "0");

        }


        if (hoursElement) {

            hoursElement.textContent =
                String(hours).padStart(2, "0");

        }


        if (minutesElement) {

            minutesElement.textContent =
                String(minutes).padStart(2, "0");

        }


        if (secondsElement) {

            secondsElement.textContent =
                String(seconds).padStart(2, "0");

        }

    }, 1000);


/* =====================================================
   6. GALLERY LIGHTBOX
   ===================================================== */

const galleryImages =
    document.querySelectorAll(
        ".gallery-item img"
    );


const lightbox =
    document.querySelector("#lightbox");


const lightboxImage =
    document.querySelector("#lightboxImage");


const closeLightbox =
    document.querySelector(
        "#closeLightbox"
    );


galleryImages.forEach(
    function (image) {

        image.addEventListener(
            "click",
            function () {

                if (!lightbox) {
                    return;
                }


                lightboxImage.src =
                    image.src;


                lightboxImage.alt =
                    image.alt;


                lightbox.classList.add(
                    "show"
                );

            }
        );

    }
);


/* Close lightbox */

if (closeLightbox) {

    closeLightbox.addEventListener(
        "click",
        function () {

            lightbox.classList.remove(
                "show"
            );

        }
    );

}


/* Close lightbox by clicking background */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                lightbox.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =====================================================
   7. CONTACT FORM VALIDATION
   ===================================================== */

const contactForm =
    document.querySelector(
        "#contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            /*
             Prevent the browser from
             actually submitting the form.
            */

            event.preventDefault();


            /* Get input values */

            const name =
                document.querySelector(
                    "#name"
                ).value.trim();


            const email =
                document.querySelector(
                    "#email"
                ).value.trim();


            const subject =
                document.querySelector(
                    "#subject"
                ).value.trim();


            const message =
                document.querySelector(
                    "#message"
                ).value.trim();


            /* Error elements */

            const nameError =
                document.querySelector(
                    "#nameError"
                );


            const emailError =
                document.querySelector(
                    "#emailError"
                );


            const subjectError =
                document.querySelector(
                    "#subjectError"
                );


            const messageError =
                document.querySelector(
                    "#messageError"
                );


            const formSuccess =
                document.querySelector(
                    "#formSuccess"
                );


            /* Clear previous messages */

            nameError.textContent = "";
            emailError.textContent = "";
            subjectError.textContent = "";
            messageError.textContent = "";
            formSuccess.textContent = "";


            let valid = true;


            /* Validate name */

            if (name.length < 3) {

                nameError.textContent =
                    "Please enter at least 3 characters.";

                valid = false;

            }


            /* Validate email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                emailError.textContent =
                    "Please enter a valid email address.";

                valid = false;

            }


            /* Validate subject */

            if (subject.length < 3) {

                subjectError.textContent =
                    "Please enter a subject.";

                valid = false;

            }


            /* Validate message */

            if (message.length < 10) {

                messageError.textContent =
                    "Message must contain at least 10 characters.";

                valid = false;

            }


            /* Final result */

            if (valid) {

                formSuccess.textContent =
                    "Thank you! Your message has been validated successfully.";

                contactForm.reset();

            }

        }
    );

}


/* =====================================================
   8. LIVE FORM VALIDATION
   ===================================================== */

const nameInput =
    document.querySelector("#name");


if (nameInput) {

    nameInput.addEventListener(
        "input",
        function () {

            const error =
                document.querySelector(
                    "#nameError"
                );


            if (nameInput.value.trim().length >= 3) {

                error.textContent = "✓";

                error.style.color =
                    "#16a34a";

            } else {

                error.textContent =
                    "Name should contain at least 3 characters.";

                error.style.color =
                    "#dc2626";

            }

        }
    );

}


const emailInput =
    document.querySelector("#email");


if (emailInput) {

    emailInput.addEventListener(
        "input",
        function () {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            const error =
                document.querySelector(
                    "#emailError"
                );


            if (
                emailPattern.test(
                    emailInput.value
                )
            ) {

                error.textContent = "✓";

                error.style.color =
                    "#16a34a";

            } else {

                error.textContent =
                    "Enter a valid email address.";

                error.style.color =
                    "#dc2626";

            }

        }
    );

}