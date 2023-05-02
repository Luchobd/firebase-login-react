import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Zsa-8rs4RXhme90hPEr4jU_mA4M51ko",
  authDomain: "react-firebase-auth-e1cf4.firebaseapp.com",
  projectId: "react-firebase-auth-e1cf4",
  storageBucket: "react-firebase-auth-e1cf4.appspot.com",
  messagingSenderId: "87001429868",
  appId: "1:87001429868:web:504b3289d4d29b1d776549",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const auth = getAuth(app); => De esta forma es que se pueden autentificar usuarios, poder guiarlos con google, facebook, etc...
