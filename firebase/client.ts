// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsztjKUBXKk_lOFQVm7e-Weh1MgHtw1YA",
    authDomain: "internprep-3d746.firebaseapp.com",
    projectId: "internprep-3d746",
    storageBucket: "internprep-3d746.firebasestorage.app",
    messagingSenderId: "870802380519",
    appId: "1:870802380519:web:14e4260e3db2e24abdb442",
    measurementId: "G-TJ03C0M6WL"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth=getAuth(app);
export const db=getFirestore(app);