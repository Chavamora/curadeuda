import { initializeApp, getApps } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "curadeudatest-fa237.firebaseapp.com",

  projectId: "curadeudatest-fa237",

  storageBucket: "curadeudatest-fa237.firebasestorage.app",

  messagingSenderId: "624539587008",

  appId: "1:624539587008:web:42ea42656e797c12e4b825",
};

// Inicializa Firebase solo una vez

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
