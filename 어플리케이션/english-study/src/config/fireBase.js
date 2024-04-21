// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg8nY5hozrHSOL3bMWF4NVvAIUXq5mwUM",
    authDomain: "english-study-app-48a13.firebaseapp.com",
    projectId: "english-study-app-48a13",
    storageBucket: "english-study-app-48a13.appspot.com",
    messagingSenderId: "398990876088",
    appId: "1:398990876088:web:d032925e5f85ce574e034d",
    measurementId: "G-J60VNH544K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db};