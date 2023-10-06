// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyG0ctX7ZJhmygMFtBV6TcAM9mvG0erSU",
  authDomain: "assignment-8-donation.firebaseapp.com",
  projectId: "assignment-8-donation",
  storageBucket: "assignment-8-donation.appspot.com",
  messagingSenderId: "626525950288",
  appId: "1:626525950288:web:9e1a05083c6dffa7101c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);