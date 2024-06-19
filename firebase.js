// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBouuBGeXLQX1WAwXYfdeyv6uaoxEdDeDM",
  authDomain: "sara-kulsum.firebaseapp.com",
  projectId: "sara-kulsum",
  storageBucket: "sara-kulsum.appspot.com",
  messagingSenderId: "527868772707",
  appId: "1:527868772707:web:d82b59f1b9c1f86b7fd356",
  measurementId: "G-FC3KTKW57J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);