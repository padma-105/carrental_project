console.log("hello world")

// nav bar start
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdown = document.querySelector('.dropdown');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});
// nav bar end

// form start
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});
// form end

