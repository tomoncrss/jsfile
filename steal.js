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
 
