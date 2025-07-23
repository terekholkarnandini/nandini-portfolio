// Firebase.jsx

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ import Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoU5SVvi_GN9IHhD1KNsUBQO2e7Pf2q88",
  authDomain: "contact-a8b1c.firebaseapp.com",
  projectId: "contact-a8b1c",
  storageBucket: "contact-a8b1c.firebasestorage.app",
  messagingSenderId: "523521339679",
  appId: "1:523521339679:web:591ce8c53072f1f884402a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and export it
const db = getFirestore(app);
export { db };
