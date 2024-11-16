// Mock Database
const mockDatabase = {
    users: [],
    signUp(username, password) {
      if (this.users.find(user => user.username === username)) {
        alert("Username already exists!");
        return false;
      }
      this.users.push({ username, password });
      alert("Signup successful! Please log in.");
      showLogin();
      return true;
    },
    login(username, password) {
      const user = this.users.find(
        user => user.username === username && user.password === password
      );
      if (user) {
        alert(`Welcome back, ${username}!`);
        return true;
      } else {
        alert("Invalid credentials!");
        return false;
      }
    },
  };
  
  // Show Login Form
  function showLogin() {
    document.getElementById("login-section").classList.remove("hidden");
    document.getElementById("signup-section").classList.add("hidden");
  }
  
  // Show Signup Form
  function showSignUp() {
    document.getElementById("signup-section").classList.remove("hidden");
    document.getElementById("login-section").classList.add("hidden");
  }
  
  // Handle Login Form Submission
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    mockDatabase.login(username, password);
  });
  
  // Handle Signup Form Submission
  document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    mockDatabase.signUp(username, password);
  });
  
  // Placeholder for LinkedIn Login
  function loginWithLinkedIn() {
    alert("LinkedIn Login is not yet implemented.");
  }
  
  // Placeholder for Facebook Login
  function loginWithFacebook() {
    alert("Facebook Login is not yet implemented.");
  }
