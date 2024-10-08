import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCBTwBMzl80lekFZ9iuafeMnvMAPdLc60k",
    authDomain: "cloudlineimagery.firebaseapp.com",
    projectId: "cloudlineimagery",
    storageBucket: "cloudlineimagery.appspot.com",
    messagingSenderId: "921395399197",
    appId: "1:921395399197:web:ccce27797e814b66af54f4",
    measurementId: "G-JQ2730SLDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

