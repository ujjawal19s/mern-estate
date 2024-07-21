// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-estate-8aaa8.firebaseapp.com",
  projectId: "mern-estate-8aaa8",
  storageBucket: "mern-estate-8aaa8.appspot.com",
  messagingSenderId: "107697360156",
  appId: "1:107697360156:web:33f6bc8f935e3d1d19bed9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);