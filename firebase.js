// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlBC9YiDfd4TPqFoTV8xQwqZybKeqTTCk",
  authDomain: "instaclone-f3960.firebaseapp.com",
  projectId: "instaclone-f3960",
  storageBucket: "instaclone-f3960.appspot.com",
  messagingSenderId: "834491639115",
  appId: "1:834491639115:web:24d70e667e48f5254474ce"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };