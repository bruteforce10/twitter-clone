// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEuNS4cTBHC24ZnizhEblGPfFLK8lVYgg",
  authDomain: "next-js-data-785bf.firebaseapp.com",
  projectId: "next-js-data-785bf",
  storageBucket: "next-js-data-785bf.appspot.com",
  messagingSenderId: "150654965597",
  appId: "1:150654965597:web:e0b43567b60b7d656a3ab4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;
export { db, storage };
