// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALyAQVmmMbgpd2BWNfVdJgaVwvuxXJg38",
  authDomain: "chatgpt-messanger-74d46.firebaseapp.com",
  projectId: "chatgpt-messanger-74d46",
  storageBucket: "chatgpt-messanger-74d46.appspot.com",
  messagingSenderId: "335990318047",
  appId: "1:335990318047:web:999c7b8de0c012a32f5a6a"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };