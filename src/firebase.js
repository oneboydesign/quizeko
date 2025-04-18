import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANApFeUhI5HZ1QkSZhMRhMX_pNNaqMDVM",
  authDomain: "quizeko-dc127.firebaseapp.com",
  projectId: "quizeko-dc127",
  storageBucket: "quizeko-dc127.appspot.com",
  messagingSenderId: "344830770261",
  appId: "1:344830770261:web:e352028b80f5c1083668dc",
  measurementId: "G-8ENJ9D19XK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
