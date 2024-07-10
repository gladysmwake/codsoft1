// Handle login form submission
async function handleLogin(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.querySelector('.error-message');

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      // Successful login, redirect or perform other actions
      window.location.href = '/';
    } else {
      // Login failed, display error message
      const error = await response.json();
      errorMessage.textContent = error.message;
    }
  } catch (error) {
    console.error('Error logging in:', error);
    errorMessage.textContent = 'An error occurred. Please try again later.';
  }
}

// Add event listener to the login form
document.querySelector('.login-form').addEventListener('submit', handleLogin);
