// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSTK2_dyZM8o1IXM9aSaLYMRsGA1rnK_M",
  authDomain: "realtor-clone-react-f4de6.firebaseapp.com",
  projectId: "realtor-clone-react-f4de6",
  storageBucket: "realtor-clone-react-f4de6.appspot.com",
  messagingSenderId: "767090339234",
  appId: "1:767090339234:web:65fa3e0d5c025a2b1956fb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()