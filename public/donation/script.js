// Function to show the modal
function showModal(message) {
  var modal = document.getElementById("myModal");
  var modalMessage = document.getElementById("modalMessage");
  modalMessage.innerHTML = message;
  modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal when the user clicks on the close button
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = hideModal;

// Handle click event for the OK button in the modal
var okButton = document.getElementById("okButton");
okButton.onclick = hideModal;

function validateDonationForm(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Validation code for the donation form fields
  // You can implement your validation logic here

  // Get form input values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var amount = document.getElementById("amount").value;
  var cardNumber = document.getElementById("cardNumber").value;
  var expiryMonth = document.getElementById("expiryMonth").value;
  var expiryYear = document.getElementById("expiryYear").value;
  var cvv = document.getElementById("cvv").value;

  // Validate full name
  if (!fullName) {
    document.getElementById("donationMessage").innerHTML = "Please enter your full name.";
    return false;
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("donationMessage").innerHTML = "Please enter a valid email address.";
    return false;
  }

  // Validate phone number
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("donationMessage").innerHTML = "Please enter a valid 10-digit phone number.";
    return false;
  }

  // Validate donation amount
  if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
    document.getElementById("donationMessage").innerHTML = "Please enter a valid donation amount.";
    return false;
  }

  // Validate card number
  if (!cardNumber || cardNumber.length !== 16 || isNaN(cardNumber)) {
    document.getElementById("donationMessage").innerHTML = "Please enter a valid 16-digit card number.";
    return false;
  }

  // Validate expiry month
  if (!expiryMonth || isNaN(expiryMonth) || parseInt(expiryMonth) < 1 || parseInt(expiryMonth) > 12) {
    document.getElementById("donationMessage").innerHTML = "Please enter a valid expiry month (1-12).";
    return false;
  }

  // Validate expiry year
  var currentYear = new Date().getFullYear().toString().slice(2);
  if (!expiryYear || isNaN(expiryYear) || expiryYear.length !== 2 || parseInt(expiryYear) < parseInt(currentYear)) {
    document.getElementById("donationMessage").innerHTML = "Please enter a valid expiry year.";
    return false;
  }

  // Validate CVV
  if (!cvv || cvv.length !== 3 || isNaN(cvv)) {
    document.getElementById("donationMessage").innerHTML = "Please enter a valid 3-digit CVV.";
    return false;
  }

  // If all validations pass, show success message, clear form, and return true
  var successMessage = "Transaction Successful. Thank you for your contribution and Have a good day! :)";
  showModal(successMessage);


  // Clear form input values
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("cardNumber").value = "";
  document.getElementById("expiryMonth").value = "";
  document.getElementById("expiryYear").value = "";
  document.getElementById("cvv").value = "";
  document.getElementById("donationMessage").innerHTML = "";

  return true;
}
