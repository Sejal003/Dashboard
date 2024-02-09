// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsg-gnMJ4hv072ck3e-wSI0ugIxJigLBc",
  authDomain: "dashboard-1a463.firebaseapp.com",
  projectId: "dashboard-1a463",
  storageBucket: "dashboard-1a463.appspot.com",
  messagingSenderId: "1008975353789",
  appId: "1:1008975353789:web:4d63c689d84912d93824d4",
  measurementId: "G-L7BLQ1HNNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);