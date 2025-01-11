document.getElementById('submitBtn').addEventListener('click', function () {
    let errors = [];
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value.trim();
  
    if (!username) errors.push('Username is required.');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) errors.push('Enter a valid email.');
    
    const phoneRegex = /^\+92\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) errors.push('Phone number must be 11 digits and start with +92.');
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password || !passwordRegex.test(password)) {
      errors.push('Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.');
    }
    
    if (password !== confirmPassword) errors.push('Passwords do not match.');
    
    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      alert(`Username: ${username}\nEmail: ${email}\nPhone: ${phone}`);
    }
  });
  
  document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('registrationForm').reset();
  });
  