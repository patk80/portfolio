let navLinks         = document.querySelectorAll(".nav-link");
let navbarCollapse   = document.querySelector(".navbar-collapse");
const copyrightDate = document.querySelector("#footer-copyright-date");
const hamburgerIcon = document.querySelectorAll(".hamburger-icon");

// Hamburger icon listening for click to toggle + Looping through all navLinks and adding an event listener to close navbar when clicked (made for mobile) //
hamburgerIcon.forEach (icon => {  
  icon.addEventListener("click", (event) => {
    icon.classList.toggle("open");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            icon.classList.remove("open");
            navbarCollapse.classList.remove("show");
        });
    });
  });
});

// Automatically Update Footer Date with Current Year //
copyrightDate.innerText = new Date().getFullYear();