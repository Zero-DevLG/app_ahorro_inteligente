// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnm8mlZr4t18MTIqiRgK4qeuQrURUFjHs",
  authDomain: "ahorro-inteligente-5172b.firebaseapp.com",
  projectId: "ahorro-inteligente-5172b",
  storageBucket: "ahorro-inteligente-5172b.appspot.com",
  messagingSenderId: "1089393873101",
  appId: "1:1089393873101:web:91dd4ef6857d9b5ac29984"
};

// Initialize Firebase
export const initFireBase = initializeApp(firebaseConfig);