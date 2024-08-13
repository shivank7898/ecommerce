// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGPQK3fVd22kV3PcvlPRiScSn0v8vDAjA",
  authDomain: "amazom-clone-c214a.firebaseapp.com",
  projectId: "amazom-clone-c214a",
  storageBucket: "amazom-clone-c214a.appspot.com",
  messagingSenderId: "130824732858",
  appId: "1:130824732858:web:5b26228f2955300b05c283",
  measurementId: "G-QRDKK30CKG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
