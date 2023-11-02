import { auth } from './config.js'; 
import { signInWithEmailAndPassword, updatePassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

// Check if the elements exist in the DOM before trying to access them
const email = document.querySelector('#lemail');
const password = document.querySelector('#lpass');
const btn = document.querySelector('.ubd');

if (email && password && btn) {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const userEmail = email.value;
    const userPassword = password.value;

    // Make sure the email and password are not empty
    if (!userEmail || !userPassword) {
      alert('Please provide an email and password.'); // Use alert for user notification
      return;
    }

    // Sign in with Firebase authentication
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        // alert('Hello, world'); // Notify the user of a successful sign-in
        // Redirect to the home page after successful sign-in
        window.location = 'home.html';
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Error:', errorMessage);
        alert('Error: ' + errorMessage); // Notify the user of the error
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
