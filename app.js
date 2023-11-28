
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function hoverProject(element) {
    element.style.transform = "scale(1.05)";
}

function unhoverProject(element) {
    element.style.transform = "scale(1)";
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset();
    }
}

const text = "Welcome to My Portfolio !";
let index = 0;
const speed = 100; // Adjust the speed of the typing animation

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Call the typing function when the page loads
window.onload = function () {
    typeWriter();
};