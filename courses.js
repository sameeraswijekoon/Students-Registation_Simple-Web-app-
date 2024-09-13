var currentPopup = null;

// Function to display error message popup
function displayError(message) {
    // Remove the current popup if exists
    if (currentPopup) {
        currentPopup.remove();
    }
    
    // Create a popup div
    var popup = document.createElement('div');
    popup.className = 'error-popup';
    
    // Create a close button
    var closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        popup.remove(); // Remove the popup when the close button is clicked
        currentPopup = null;
    });
    
    // Check if message contains line breaks
    if (message.includes('\n')) {
        // Split message into paragraphs
        var paragraphs = message.split('\n');
        paragraphs.forEach(function(paragraphText) {
            var paragraph = document.createElement('p');
            paragraph.textContent = paragraphText;
            popup.appendChild(paragraph);
        });
    } else {
        // Create a paragraph element to display the error message
        var errorMessage = document.createElement('p');
        errorMessage.textContent = message;
        popup.appendChild(errorMessage);
    }
    
    // Append close button to the popup
    popup.appendChild(closeButton);
    
    // Append the popup to the body of the document
    document.body.appendChild(popup);
    
    // Set the currentPopup to the newly created popup
    currentPopup = popup;
}
