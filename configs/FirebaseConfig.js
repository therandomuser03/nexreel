// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-short-vid-gen.firebaseapp.com",
  projectId: "ai-short-vid-gen",
  storageBucket: "ai-short-vid-gen.firebasestorage.app",
  messagingSenderId: "217378731540",
  appId: "1:217378731540:web:051fa9d49108d0a7b81901",
  measurementId: "G-DX576DF51B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);