const paragraph = "Horizon Campus is a leading private university in Sri Lanka geared to provide an inspiring learning experience to students within a holistic university atmosphere. The Campus opened its doors marking a cornerstone in the national educational sector of the country, with the aim of delivering a fully-fledged generation to the world of tomorrow.";

let index = 0;
const speed = 25; // Typing speed in milliseconds

function typeWriter() {
    if (index < paragraph.length) {
        document.getElementById("typing-text").innerHTML += paragraph.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Call the function when the page loads
window.onload = function() {
    typeWriter();
};



function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('remember').checked;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);

    // Check if email and password meet your criteria
    if (email === 'admin@gmail.com' && password === 'admin') {
        alert('Login successful!');
        window.location.href = 'index.html';
        return false;
    } else {
        alert('Invalid email or password. Please try again.');
        return false;
    }
}

