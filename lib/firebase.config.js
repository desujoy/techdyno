// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAkuZIVcgM8mhf6D3tI9JejS63pasy2uk",
  authDomain: "techdyno-4a38f.firebaseapp.com",
  projectId: "techdyno-4a38f",
  storageBucket: "techdyno-4a38f.appspot.com",
  messagingSenderId: "1078306316710",
  appId: "1:1078306316710:web:8487108a179af8987faf67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);