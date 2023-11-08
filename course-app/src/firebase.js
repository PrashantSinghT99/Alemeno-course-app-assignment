// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAFT_IVkbHkY-rKSUZfBrV3Lxj4UMA3ABk",
  authDomain: "almeno-course-app.firebaseapp.com",
  projectId: "almeno-course-app",
  storageBucket: "almeno-course-app.appspot.com",
  messagingSenderId: "297496704092",
  appId: "1:297496704092:web:a34da94b006e40729ca299",
  measurementId: "G-3520YRXEYL",
}
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
