<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test Prompt with Timeout</title>
</head>
<body>
    <h1>Test Page</h1>
    <script>
        console.log("Script is running");

        window.addEventListener('load', function() {
            console.log("Window loaded");

            setTimeout(function() {
                console.log("Timeout triggered");

                let message = document.createElement('div');
                message.style.position = 'fixed';
                message.style.top = '30%';
                message.style.left = '50%';
                message.style.transform = 'translate(-50%, -50%)';
                message.style.background = 'white';
                message.style.padding = '20px';
                message.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
                message.style.zIndex = '9999';
                message.style.display = 'block';
                message.innerHTML = `
                    <h2>Session Expired</h2>
                    <p>Please re-enter your password:</p>
                    <input type="password" id="password" placeholder="Enter password" required>
                    <button id="submit">Submit</button>
                `;
                
                document.body.appendChild(message);
                console.log("Prompt appended to DOM");
            }, 3000);
        });
    </script>
</body>
</html>
