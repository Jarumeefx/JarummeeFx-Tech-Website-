const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alertBox.classList.remove("d-none");

    // Store message in localStorage for admin dashboard
    const name = form.querySelector('input[placeholder="Your Name"]').value;
    const email = form.querySelector('input[placeholder="Your Email"]').value;
    const message = form.querySelector('textarea[placeholder="Message"]').value;

    let messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push({ name, email, message, date: new Date().toLocaleString() });
    localStorage.setItem('messages', JSON.stringify(messages));

    form.reset();

    // Auto-hide success message after 3 seconds
    setTimeout(function() {
        alertBox.classList.add("d-none");
    }, 3000);
});

// Navbar scroll effect
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});