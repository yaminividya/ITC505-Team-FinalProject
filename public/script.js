const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const dotsContainer = document.querySelector('.carousel-dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const subscribeBtn = document.getElementById('subscribe-btn');
const emailInput = document.getElementById('email');
const successMessage = document.getElementById('success-message');

// Remove existing dots
dotsContainer.innerHTML = '';

// Create dots for each image
carouselImages.forEach((image, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.setAttribute('data-slide', index);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

let counter = 0; // Start at 0 for the first image
const size = carouselImages[0].clientWidth;
const totalImages = carouselImages.length;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[counter % totalImages].classList.add('active'); // Adjust index using modulo
}

function slide() {
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

function slideToImage(slideIndex) {
  counter = slideIndex; // Update counter directly
  slide();
  updateDots();
}

dots.forEach((dot, index) => { // Update dot index to match image index
  dot.addEventListener('click', () => {
    slideToImage(index); // Pass index directly
  });
});

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + totalImages) % totalImages; // Ensure counter is within bounds
  slide();
  updateDots();
});

nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % totalImages; // Ensure counter is within bounds
  slide();
  updateDots();
});

carouselSlide.addEventListener('transitionend', () => {
  if (counter >= totalImages) {
    carouselSlide.style.transition = 'none';
    counter = 0; // Reset counter to start
    carouselSlide.style.transform = `translateX(0)`;
  }
});

// Automatic slide
setInterval(() => {
  counter = (counter + 1) % totalImages; // Ensure counter is within bounds
  slide();
  updateDots();
}, 5000);

// Highlight the first dot initially
updateDots();

subscribeBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  const email = emailInput.value.trim();
  
  if (isValidEmail(email)) {
    // Email is valid, show success message
    successMessage.textContent = 'Thanks for subscribing!';
    successMessage.style.color = 'green';
    successMessage.style.display = 'block';
    
    // Clear the input field
    emailInput.value = ''; // Clear the input field when subscription is successful
  } else {
    // Email is invalid, show error message
    successMessage.textContent = 'Please enter a valid email address.';
    successMessage.style.color = 'red';
    successMessage.style.display = 'block';
  }
});

function isValidEmail(email) {
  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}


/* login.js */

// Function to handle login form submission
// function login() {
//   // Retrieve input values
//   const username = document.getElementById('username').value.trim();
//   const password = document.getElementById('password').value.trim();

//   // Check if username and password are not empty
//   if (username === '' || password === '') {
//     alert('Please enter both username and password.');
//     return;
//   }

//   // You can add further logic here, like sending the data to a server for authentication

//   // For demonstration purposes, let's just log the username and password
//   console.log('Username:', username);
//   console.log('Password:', password);

//   // Redirect to dashboard or home page after successful login
//   window.location.href = '/dashboard'; // Change the URL as needed
// }


/* signup.js */

// Function to handle signup form submission
function signup() {
  // Retrieve input values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Check if any field is empty
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // You can add further validation and logic here, like checking if the email is valid or password meets certain criteria

  // For demonstration purposes, let's just log the input values
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);

  // Redirect to login page after successful signup
  window.location.href = '/login'; // Change the URL as needed
}
