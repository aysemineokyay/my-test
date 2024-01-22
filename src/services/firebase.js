// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOZBmkZ-j9tY45AWVTlMuD6lHHc-4CW3w",
  authDomain: "sample-2fef2.firebaseapp.com",
  projectId: "sample-2fef2",
  storageBucket: "sample-2fef2.appspot.com",
  messagingSenderId: "437624716958",
  appId: "1:437624716958:web:48220544f70fabf6d8058f",
  measurementId: "G-ELLMF16TDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
