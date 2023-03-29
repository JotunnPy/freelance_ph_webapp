// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVAl2ZFBsJJ5x_YSCcZdt-d2dSxnEW9G0",
  authDomain: "test-d9f10.firebaseapp.com",
  projectId: "test-d9f10",
  storageBucket: "test-d9f10.appspot.com",
  messagingSenderId: "764176577011",
  appId: "1:764176577011:web:5294c03160e1dc67552286",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
