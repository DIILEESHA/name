import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALUEekSo7pTM23ttwrZEoByQVuXc9Iew4",
  authDomain: "admin-4aadd.firebaseapp.com",
  projectId: "admin-4aadd",
  storageBucket: "admin-4aadd.firebasestorage.app",
  messagingSenderId: "686992714228",
  appId: "1:686992714228:web:c12b3442c52a44f44631a1",
  measurementId: "G-V4Z5REKEEC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
