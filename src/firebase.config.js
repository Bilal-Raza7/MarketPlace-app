import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAxriCkt-d2LFxXiGYyiKq0PTOK_0zX2ko",
  authDomain: "market-place-app-303c4.firebaseapp.com",
  projectId: "market-place-app-303c4",
  storageBucket: "market-place-app-303c4.appspot.com",
  messagingSenderId: "664346160239",
  appId: "1:664346160239:web:50b7c351a3299debebb19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();