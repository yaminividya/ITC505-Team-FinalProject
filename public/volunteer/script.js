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

  // Display success message in the modal
  var modal = document.getElementById("myModal");
  var message = document.getElementById("modalMessage");
  message.innerHTML = "Thanks for joining us! Our team got your details and we will connect with you shortly.";
  modal.style.display = "block";

  // Clear form fields after successful submission (optional)
  document.getElementById("volunteerForm").reset();

  return false; // Prevent form submission for demonstration purpose
}

// Close the modal when the user clicks on the close button
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
var modal = document.getElementById("myModal");
modal.style.display = "none";
}

// Handle click event for the OK button
var okButton = document.getElementById("okButton");
okButton.onclick = function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
