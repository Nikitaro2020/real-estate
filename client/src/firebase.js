// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-e52a5.firebaseapp.com",
  projectId: "real-estate-e52a5",
  storageBucket: "real-estate-e52a5.appspot.com",
  messagingSenderId: "345020423249",
  appId: "1:345020423249:web:e10cc4d2587572651a6c70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);