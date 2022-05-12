let navLinks         = document.querySelectorAll(".nav-link");
let navbarCollapse   = document.querySelector(".navbar-collapse");
const copyrightDate = document.querySelector("#footer-copyright-date");

// Looping through all navLinks and adding an event listener to close navbar when clicked (made for mobile) //
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
    });
});

// Automatically Update Footer Date with Current Year //
copyrightDate.innerText = new Date().getFullYear();