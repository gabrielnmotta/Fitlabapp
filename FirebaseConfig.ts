import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AmbientVariables from "./src/constants/AmbientVariables";

const firebaseConfig = {
  apiKey: AmbientVariables.API_KEY,
  authDomain: AmbientVariables.AUTH_DOMAIN,
  projectId: AmbientVariables.PROJECT_ID,
  storageBucket: AmbientVariables.STORAGE_BUCKET,
  messagingSenderId: AmbientVariables.MESSAGING_SENDER_ID,
  appId: AmbientVariables.APP_ID,
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);
