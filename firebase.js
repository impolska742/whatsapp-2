import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvpJd1Z4SSGIThJa-MOsrXhJSkEIhJYqo",
  authDomain: "whatsapp-2-3e9ac.firebaseapp.com",
  projectId: "whatsapp-2-3e9ac",
  storageBucket: "whatsapp-2-3e9ac.appspot.com",
  messagingSenderId: "443255123775",
  appId: "1:443255123775:web:ec09c0c3fecef1a6952d8a",
  measurementId: "G-Y361E6N0DK",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
