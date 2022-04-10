// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth  } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT98lMiMkXIczDQlFRwA--IPeMGThIXAA",
  authDomain: "simple-ema-john-ecommerc-dc156.firebaseapp.com",
  projectId: "simple-ema-john-ecommerc-dc156",
  storageBucket: "simple-ema-john-ecommerc-dc156.appspot.com",
  messagingSenderId: "605425292267",
  appId: "1:605425292267:web:fe34010dfb785a47a3ffae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;