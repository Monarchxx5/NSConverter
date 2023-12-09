document.getElementById("preloader").style.display = "flex";

// Set a timeout to hide the preloader and start the game
setTimeout(function() {
    document.getElementById("preloader").style.opacity = "0"; // Fade out the preloader
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none"; // Hide the preloader
    }, 2000); // Wait for the fade-out transition to complete (2 seconds)
}, 3000); // Show the preloader for 3 seconds


function checkLogin() {
    var username = document.getElementById('loginForm').elements['username'].value;
    var password = document.getElementById('loginForm').elements['password'].value;
    var errorElement = document.getElementById('error');
  
    // Predefined account
    var validUsername = 'jeffreyA24';
    var validPassword = 'atrelaG143';
  
    if (username === '' || password === '') {
      errorElement.textContent = 'Username and password are required.';
    } else if (username !== validUsername || password !== validPassword) {
      errorElement.textContent = 'Incorrect username or password.';
    } else {
      // Successful login, redirect to another HTML page
      window.location.href = 'convert.html';
    }
  }
  
