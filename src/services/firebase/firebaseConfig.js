// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4pd1K1uv6X8aPP0-Mt1fYbAy9nOZixjM",
  authDomain: "ventacars-9cb7d.firebaseapp.com",
  projectId: "ventacars-9cb7d",
  storageBucket: "ventacars-9cb7d.appspot.com",
  messagingSenderId: "158058577293",
  appId: "1:158058577293:web:354207f7e399660de591c4",
  measurementId: "G-HV80TFGXCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)