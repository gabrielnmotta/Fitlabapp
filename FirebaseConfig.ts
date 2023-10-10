import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4hXM2xrfjuZFWiqCrELZUMRrWCeZVod4",
  authDomain: "fitlab-app.firebaseapp.com",
  projectId: "fitlab-app",
  storageBucket: "fitlab-app.appspot.com",
  messagingSenderId: "712019244682",
  appId: "1:712019244682:web:cec72d0cfda31394b8df73",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
