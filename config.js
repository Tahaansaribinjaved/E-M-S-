import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDM0DiWcWksdKIpSqm6xDDHJQUOM-vVzUU",
  authDomain: "expense-managment-system-5fecb.firebaseapp.com",
  projectId: "expense-managment-system-5fecb",
  storageBucket: "expense-managment-system-5fecb.appspot.com",
  messagingSenderId: "476592487927",
  appId: "1:476592487927:web:854614ad4ff1a6633a02f2",
  measurementId: "G-ENTEZ6EXD8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);