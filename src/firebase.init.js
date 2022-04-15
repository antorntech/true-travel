// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPIdLdQKj8O6AnLPlvI64tk-bJGse-WyE",
  authDomain: "true-travel-80705.firebaseapp.com",
  projectId: "true-travel-80705",
  storageBucket: "true-travel-80705.appspot.com",
  messagingSenderId: "195344934257",
  appId: "1:195344934257:web:f6ac35336d1276723d02d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
