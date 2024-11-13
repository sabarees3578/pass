// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVOGnOPNgNsOC7kZCJftaK-XNErEVyh60",
    authDomain: "password-managager.firebaseapp.com",
    projectId: "password-managager",
    storageBucket: "password-managager.firebasestorage.app",
    messagingSenderId: "739260390621",
    appId: "1:739260390621:web:48a1e31a6ca99ecd2b4f34",
    measurementId: "G-95W75DBPSE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
