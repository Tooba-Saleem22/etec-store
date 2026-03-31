// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 1️⃣ Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVugMZ7C0rkJAd0-a_-JJAEajS_THzQdI",
  authDomain: "etec-a67d6.firebaseapp.com",
  projectId: "etec-a67d6",
  storageBucket: "etec-a67d6.appspot.com",
  messagingSenderId: "160038980981",
  appId: "1:160038980981:web:5abaa0f0a975956743173c",
};

// 2️⃣ Initialize Firebase
const app = initializeApp(firebaseConfig);

// 3️⃣ Export Firestore database
export const db = getFirestore(app);
