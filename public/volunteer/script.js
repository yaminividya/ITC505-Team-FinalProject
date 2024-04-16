function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
    // Simple validation for demonstration purpose
    if (firstName == "" || lastName == "" || email == "" || phone == "") {
        alert("Please fill in all fields");
        return false;
    }

    // Display success message
    var messageDiv = document.getElementById("volunteerMessage");
    messageDiv.innerHTML = "Thanks for joining us!";
    messageDiv.style.color = "#00b300"; // Green color for success message
    messageDiv.style.textAlign = "center";
    messageDiv.style.fontSize = "30px";
  
    // Clear form fields after successful submission (optional)
    document.getElementById("volunteerForm").reset();
  
    return false; // Prevent form submission for demonstration purpose
}

    // Check if the user is logged in and update the header link accordingly
    var isLoggedIn = false; // Change this to true if the user is logged in

    window.onload = function () {
      var loginLink = document.getElementById("loginLink");

      if (isLoggedIn) {
        loginLink.innerHTML = "Signout";
        loginLink.href = "logout.html"; // Assuming logout.html handles the logout process
      } else {
        loginLink.innerHTML = "Login";
        loginLink.href = "login/index.html"; // Default login page
      }
    };
