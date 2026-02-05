// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxD1FxGhYguM1lrQ4wQzHa9cxLzalg874",
  authDomain: "estatein-b89d0.firebaseapp.com",
  projectId: "estatein-b89d0",
  storageBucket: "estatein-b89d0.firebasestorage.app",
  messagingSenderId: "410791053500",
  appId: "1:410791053500:web:4e1920b8be5b6fb460e8b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const dataBase = getFirestore(app);
