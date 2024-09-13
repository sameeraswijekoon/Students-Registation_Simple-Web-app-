function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var bmonth = document.getElementById("bmonth").value;
    var bdate = document.getElementById("bdate").value;
    var byear = document.getElementById("byear").value;
    var address = document.getElementById("address").value;
    var saddress = document.getElementById("saddress").value;
    var state = document.getElementById("state").value;
    var mail = document.getElementById("mail").value;
    var edu = document.getElementById("edu").value;

    if (fname === "" || lname === "" || bmonth === "" || bdate === "" || byear === "" || address === "" || saddress === "" || state === "" || mail === "" || edu === "") {
        alert("Please fill in all required fields.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

// Get a reference to the "bdate" input field
var bdateInput = document.getElementById("bdate");

// Generate options for 30 days
for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    bdateInput.appendChild(option);
}

document.addEventListener("DOMContentLoaded", function() {
    var bdateInput = document.getElementById("bdate");
    var popupMessage = document.getElementById("popupMessage");

    bdateInput.addEventListener("input", function() {
        var inputValue = parseInt(bdateInput.value);
        if (isNaN(inputValue) || inputValue < 1 || inputValue > 31) {
            popupMessage.style.display = "block";
            bdateInput.setCustomValidity("Invalid input");
        } else {
            popupMessage.style.display = "none";
            bdateInput.setCustomValidity("");
        }
    });
});

// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("mail");
    var popupMessage = document.getElementById("popupMessage1");

    // Function to show error message and set custom validity
    function showError() {
        popupMessage.style.display = "block"; // Show error message
        emailInput.setCustomValidity("Invalid email"); // Set custom validity
    }

    // Function to hide error message and reset custom validity
    function hideError() {
        popupMessage.style.display = "none"; // Hide error message
        emailInput.setCustomValidity(""); // Reset custom validity
    }

    // Event listener for input event
    emailInput.addEventListener("input", function() {
        var emailValue = emailInput.value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

        if (!emailRegex.test(emailValue)) {
            showError();
        } else {
            hideError();
        }
    });

    // Event listener for mouseleave event
    emailInput.addEventListener("mouseleave", function() {
        hideError();
    });

    // Event listener for blur event
    emailInput.addEventListener("blur", function() {
        hideError();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var numberInput = document.getElementById("number");
    var numberErrorMessage = document.getElementById("numberErrorMessage");

    // Function to show error message and set custom validity
    function showError() {
        numberErrorMessage.style.display = "block"; // Show error message
        numberInput.setCustomValidity("Invalid phone number"); // Set custom validity
    }

    // Function to hide error message and reset custom validity
    function hideError() {
        numberErrorMessage.style.display = "none"; // Hide error message
        numberInput.setCustomValidity(""); // Reset custom validity
    }

    // Event listener for input event
    numberInput.addEventListener("input", function() {
        var numberValue = numberInput.value;
        var phoneRegex = /^\d{10}$/; // Regular expression for a 10-digit phone number

        if (!phoneRegex.test(numberValue)) {
            showError();
        } else {
            hideError();
        }
    });

    // Event listener for mouseleave event
    numberInput.addEventListener("mouseleave", function() {
        hideError();
    });

    // Event listener for blur event
    numberInput.addEventListener("blur", function() {
        hideError();
    });
});
