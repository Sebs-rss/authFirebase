// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Importa la función necesaria del SDK de autenticación de Firebase
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrZt1qtQsKdmbADgE38X35u8wryr2jSRw",
  authDomain: "authentication-10d04.firebaseapp.com",
  projectId: "authentication-10d04",
  storageBucket: "authentication-10d04.firebasestorage.app",
  messagingSenderId: "964020894131",
  appId: "1:964020894131:web:e32b23c5e5594823acf3c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the auth service from Firebase
const auth = getAuth(app);

// Export the auth service
export { auth };
