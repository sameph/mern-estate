// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-38df9.firebaseapp.com",
  projectId: "mern-estate-38df9",
  storageBucket: "mern-estate-38df9.appspot.com",
  messagingSenderId: "882625680079",
  appId: "1:882625680079:web:157b10da033bfb13bb5dba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);