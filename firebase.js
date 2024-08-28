import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMd9bRefaC6qJv8fufvB5W40LDJYwWpzU",
  authDomain: "chat-ac349.firebaseapp.com",
  projectId: "chat-ac349",
  storageBucket: "chat-ac349.appspot.com",
  messagingSenderId: "461000930622",
  appId: "1:461000930622:web:bd3fdd00c50fe5c4e9a86f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db }