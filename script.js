document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example credentials
    if (username === 'admin' && password === 'pass') {
        document.getElementById('message').innerText = 'Login successful!';
        document.getElementById('message').style.color = 'green';
        window.location.href = 'home.html';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
        document.getElementById('message').style.color = 'red'
    }
});
