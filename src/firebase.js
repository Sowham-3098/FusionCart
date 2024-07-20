// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1KL-HlpM2EXS8ULJBdvORbhLHztlTBes",
  authDomain: "fusioncart-e2067.firebaseapp.com",
  projectId: "fusioncart-e2067",
  storageBucket: "fusioncart-e2067.appspot.com",
  messagingSenderId: "307612904086",
  appId: "1:307612904086:web:de86dbd4e37044ca5670b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();