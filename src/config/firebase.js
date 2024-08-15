import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAags0zeuWO7Ss7Nahdn72KJu5PtrGz4GQ",
  authDomain: "kite-hacks.firebaseapp.com",
  projectId: "kite-hacks",
  storageBucket: "kite-hacks.appspot.com",
  messagingSenderId: "499816998445",
  appId: "1:499816998445:web:88cd530ad1e5aefbe8baa4",
  measurementId: "G-L5M0GQS19Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);