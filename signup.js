function validateForm() {
    console.log("validateForm function called");
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    if (surname.trim() === "") {
        alert("Please enter your surname.");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (phone.trim() === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If all validations pass, redirect to login.html
    window.location.href = "loging.html";
    return true;
}
