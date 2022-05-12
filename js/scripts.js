const copyrightDate = document.querySelector("#footer-copyright-date");

// Automatically Update Footer Date with Current Year //
copyrightDate.innerText = new Date().getFullYear();