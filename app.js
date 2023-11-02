import { auth } from './config.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

// Check if the elements exist in the DOM before trying to access them
const email = document.querySelector('#semail');
const password = document.querySelector('#spass');
const btn = document.querySelector('#Signup');

if (email && password && btn) {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const userEmail = email.value;
    const userPassword = password.value;

    // Make sure the email and password are not empty
    if (!userEmail || !userPassword) {
      console.log("Please provide an email and password.");
      return;
    }

    // Create a new user with Firebase authentication
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((res) => {
        const user = res.user;
        console.log('User created:', user);
        // Redirect to the login page after successful signup
        window.location = 'login.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error:', errorCode, errorMessage);
      });
  });
}

// Your navigation event listeners seem fine
let Signu = document.querySelector('#Signu');
if (Signu) {
  Signu.addEventListener('click', () => {
    location.href = 'index.html';
  });
}

let Signi = document.querySelector('#Signi');
if (Signi) {
  Signi.addEventListener('click', () => {
    location.href = 'login.html';
  });
}
