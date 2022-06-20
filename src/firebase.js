import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9N_KxlwrwhtzzbF-lNzLH3Nfh3UZ1qZE",
  authDomain: "slack-clone-ozngrsc.firebaseapp.com",
  projectId: "slack-clone-ozngrsc",
  storageBucket: "slack-clone-ozngrsc.appspot.com",
  messagingSenderId: "895258521133",
  appId: "1:895258521133:web:c02595d0dc9f54dcf7d2a4",
  measurementId: "G-WP165FK4LL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
