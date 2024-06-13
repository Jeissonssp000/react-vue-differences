import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsWVf6zrzwHyvpDud9gwgjSKYrkPiliys",
  authDomain: "react-vue-differences.firebaseapp.com",
  projectId: "react-vue-differences",
  storageBucket: "react-vue-differences.appspot.com",
  messagingSenderId: "45443550946",
  appId: "1:45443550946:web:1037c77c739cb5a306d8bb"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = firebase.auth();

export const logIn = (pass, callback) => {
  e.preventDefault();
  auth.signInWithEmailAndPassword("demo@gmail.com", pass)
    .then(() => callback(true))
    .catch(() => callback(false))
};

const snapDoc = (col, doc, setter) => db
  .collection(col)
  .doc(doc)
  .onSnapshot((doc) => setter(doc.data() || false))

export const getLastFileContain = (setter) => snapDoc("files", "lastFile", setter)