// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from  "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAM1mYX8r1Kk8FnqatnMvvPdPnag19SF0",
  authDomain: "fireblog-app-react-e2741.firebaseapp.com",
  projectId: "fireblog-app-react-e2741",
  storageBucket: "fireblog-app-react-e2741.appspot.com",
  messagingSenderId: "677668107212",
  appId: "1:677668107212:web:148438bb7bc66097be6369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();