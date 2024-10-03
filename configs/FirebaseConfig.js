// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJcPu9H743AQCHXxSRxzDREFYT--fMRWc",
  authDomain: "carelories-mobile-apps.firebaseapp.com",
  projectId: "carelories-mobile-apps",
  storageBucket: "carelories-mobile-apps.appspot.com",
  messagingSenderId: "158075213353",
  appId: "1:158075213353:web:176d8d23f75526db092e38",
  measurementId: "G-XFKVDEWWY2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);