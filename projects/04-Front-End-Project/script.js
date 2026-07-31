// Simple onclick example
function showAlert() {
    alert("Welcome to HASHIM Auto Parts!");
}

// Password visibility toggle
function togglePassword() {
    let passField = document.getElementById("pass");
    if (passField) {
        if (passField.type === "password") {
            passField.type = "text";
        } else {
            passField.type = "password";
        }
    }
}

// Form submit
function submitForm(e) {
    e.preventDefault();
    alert("Thank you! Message sent.");
}

// Mouse hover example
function hoverEffect(element) {
    element.style.backgroundColor = "#f0f0f0";
}

function leaveEffect(element) {
    element.style.backgroundColor = "white";
}

// Arrow function example
function welcome() {
    alert("Thank you for visiting our site!");
};

// Run when page loads
window.onload = function() {
    console.log("HASHIM Auto Parts Website Loaded");
};