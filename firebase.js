import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDUZlcJ3hB3o8g5Vu3n_Ezntt_nW3T4wV4",
  authDomain: "react-notes-77f6e.firebaseapp.com",
  projectId: "react-notes-77f6e",
  storageBucket: "react-notes-77f6e.appspot.com",
  messagingSenderId: "56776280788",
  appId: "1:56776280788:web:4c27f47118d6a6c9268941"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
