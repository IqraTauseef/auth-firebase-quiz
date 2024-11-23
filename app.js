// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyBzbUDHcx4n8FQsVcpvFGa4hOCGEt1239o",
  authDomain: "first-project-590ef.firebaseapp.com",
  projectId: "first-project-590ef",
  storageBucket: "first-project-590ef.firebasestorage.app",
  messagingSenderId: "788170652731",
  appId: "1:788170652731:web:8f4b63080223e81f30b01e",
  measurementId: "G-8KGBDMGTES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize Analytics
const auth = getAuth();

// Signup Function
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  // Optional: Add more password validation (e.g., length, special characters)
  if (password.length < 6) {
    alert('Password should be at least 6 characters long.');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      alert('Sign up successful! Welcome, ' + user.email);
      // window.location.pathname = './login.html'
      window.location.href = '/auth-firebase-quiz/login.html'; // Updated path
    })
    .catch((error) => {
      // Handle sign-up errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);

      // Display a user-friendly error message
      alert('Error: ' + errorMessage);
    });
}

// Attach event listener to button
document.getElementById('signupButton')?.addEventListener('click', signup);

function signin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('Signed in successfully: ', user)
    alert('Logged in...')
    sessionStorage.setItem("user", user.email);
    // window.location.pathname = './welcome.html'
    window.location.href = '/auth-firebase-quiz/welcome.html'; // Updated path
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });
}

document.getElementById('loginButton')?.addEventListener('click', signin);
