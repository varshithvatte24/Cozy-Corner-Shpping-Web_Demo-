// Login form validation
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = this.email.value.trim();
    const password = this.password.value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (email === "test@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid credentials, please try again.";
    }
});

// Contact form submission with basic validation and feedback
document.getElementById('contactForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulate form submission success
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
});
