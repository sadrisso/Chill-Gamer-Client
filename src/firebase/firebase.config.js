// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTxOE_T97-tixe31fEHyTcaSaVabFYUGM",
  authDomain: "chill-gamer-90cfe.firebaseapp.com",
  projectId: "chill-gamer-90cfe",
  storageBucket: "chill-gamer-90cfe.firebasestorage.app",
  messagingSenderId: "309384449778",
  appId: "1:309384449778:web:252d401f9c6a969c1cca6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);