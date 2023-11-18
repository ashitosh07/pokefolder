import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyA3Ok6MxgnBb2g193lct4G4FVxqYMnbAJg',
  authDomain: 'react-firebase-auth-24a31.firebaseapp.com',
  projectId: 'react-firebase-auth-24a31',
  storageBucket: 'react-firebase-auth-24a31.appspot.com',
  messagingSenderId: '895791381586',
  appId: '1:895791381586:web:3eb0fb69522822edc9b38b',
  measurementId: 'G-F9GX9QQMV4',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
