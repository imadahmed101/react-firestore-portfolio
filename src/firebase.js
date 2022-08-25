import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAQeCUwX5z70vi0nNFj7BVnKalNCre_RxQ",
  authDomain: "portfolio-26ca0.firebaseapp.com",
  projectId: "portfolio-26ca0",
  storageBucket: "portfolio-26ca0.appspot.com",
  messagingSenderId: "127643892054",
  appId: "1:127643892054:web:0bc6568acb23ea47817ef7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);