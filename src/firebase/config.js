import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWfDAUcR8mQbC4waRAlP6MNbOaoFrIuE4",
  authDomain: "book-store-edc07.firebaseapp.com",
  projectId: "book-store-edc07",
  storageBucket: "book-store-edc07.appspot.com",
  messagingSenderId: "915628751699",
  appId: "1:915628751699:web:88a077780a2fdf9087ffa6",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
