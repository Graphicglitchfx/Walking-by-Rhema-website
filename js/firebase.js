import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGSEsT8I00rhDBjrbNdsJE7jzXzkczF6o",
  authDomain: "walkingbyrhema-121234.firebaseapp.com",
  projectId: "walkingbyrhema-121234",
  storageBucket: "walkingbyrhema-121234.firebasestorage.app",
  messagingSenderId: "566925264059",
  appId: "1:566925264059:web:a36227674d60314028d59e",
  measurementId: "G-18EXBEV83L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };