document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = [];

    if (!username) {
        errorMsg.push("Username cannot be empty.");
    }

    if (!password) {
        errorMsg.push("Password cannot be empty.");
    }

    if (errorMsg.length > 0) {
        alert(errorMsg.join('\n'));
    } else {
        alert(`Welcome, ${username}!`);
    }
});
