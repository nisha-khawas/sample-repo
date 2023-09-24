// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDuFpSlDNkUl1xWMnWp4sA7D8LwmeigU5E",
  authDomain: "react-2023-6bb71.firebaseapp.com",
  projectId: "react-2023-6bb71",
  storageBucket: "react-2023-6bb71.appspot.com",
  messagingSenderId: "343255979603",
  appId: "1:343255979603:web:2d34f53d8180dc869958a6",
  measurementId: "G-ZYXBE84BBV",
};

// Initialize Firebase
export function initializeFirebase() {
  initializeApp(firebaseConfig);
}
