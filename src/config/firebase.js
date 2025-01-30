
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNJUdGi3wMZyKcB7D8LItrTfnAKy2dhiQ",
    authDomain: "next-firebase-39cf4.firebaseapp.com",
    projectId: "next-firebase-39cf4",
    storageBucket: "next-firebase-39cf4.firebasestorage.app",
    messagingSenderId: "1018495510302",
    appId: "1:1018495510302:web:3e6f7de354fd2a19a40b0f"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;
