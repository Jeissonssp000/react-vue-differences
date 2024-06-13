import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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