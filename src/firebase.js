import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYKlDmRALKY0CVVpWm-lDIxIRxdKrpXNY",
  authDomain: "video-portfolio-3a45b.firebaseapp.com",
  projectId: "video-portfolio-3a45b",
  storageBucket: "video-portfolio-3a45b.firebasestorage.app",
  messagingSenderId: "907215098598",
  appId: "1:907215098598:web:88612a010c06bb1a2ea127"
};

const app = initializeApp(firebaseConfig);

export const db   = getFirestore(app);
export const auth = getAuth(app);