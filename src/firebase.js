import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgBhuYUAq8piudim_JAVyolDBFXHmdJ8o",
    authDomain: "twitter-clone-ef330.firebaseapp.com",
    projectId: "twitter-clone-ef330",
    storageBucket: "twitter-clone-ef330.appspot.com",
    messagingSenderId: "1077544886958",
    appId: "1:1077544886958:web:f21b8ae0fa945b8ca8833f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;