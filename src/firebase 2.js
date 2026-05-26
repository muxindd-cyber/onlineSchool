import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAccvN_rXX0w2KEc3-8CI2OUri063GZ81A",
  authDomain: "online-school-d145f.firebaseapp.com",
  projectId: "online-school-d145f",
  storageBucket: "online-school-d145f.firebasestorage.app",
  messagingSenderId: "372284289239",
  appId: "1:372284289239:web:48c530c82e07a5bf948092",
  measurementId: "G-YLNTBEJ69B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
