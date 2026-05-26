import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
const auth = getAuth(app);
const db = getFirestore(app);

async function testFirebase() {
  const testEmail = `test_${Date.now()}@example.com`;
  const testPassword = "password123";
  
  console.log("1. Проверка регистрации (Auth)...");
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, testEmail, testPassword);
    console.log("✅ Успех! Пользователь зарегистрирован в Firebase Auth:", userCredential.user.uid);
    
    console.log("2. Проверка записи в базу данных (Firestore)...");
    try {
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: testEmail,
        name: "Test User",
        hasAccess: false
      });
      console.log("✅ Успех! Документ записан в Firestore.");
    } catch (dbError) {
      console.error("❌ Ошибка Firestore (скорее всего правила закрыты):", dbError.message);
    }
  } catch (authError) {
    console.error("❌ Ошибка Auth (скорее всего отключен Email/Password):", authError.message);
  }
  process.exit();
}

testFirebase();
