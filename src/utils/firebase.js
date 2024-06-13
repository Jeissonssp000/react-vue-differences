import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsWVf6zrzwHyvpDud9gwgjSKYrkPiliys",
  authDomain: "react-vue-differences.firebaseapp.com",
  projectId: "react-vue-differences",
  storageBucket: "react-vue-differences.appspot.com",
  messagingSenderId: "45443550946",
  appId: "1:45443550946:web:1037c77c739cb5a306d8bb"
};

firebase.initializeApp(firebaseConfig);

if (window.location.hostname === "localhost") {
  firebase.firestore().settings({
    host: "localhost:5010",
    ssl: false
  });
  firebase.auth().useEmulator("http://localhost:9099");
  // firebase.storage().useEmulator("http://localhost:9199");
}

const db = firebase.firestore();
const auth = firebase.auth();
export const storageRef = firebase.storage().ref();

export const logIn = (pass, callback) => {
  auth.signInWithEmailAndPassword("demo@gmail.com", pass)
    .then(() => callback(true))
    .catch(() => callback(false))
};

const snapDocs = (col, setter) => {
  return db.collection(col).onSnapshot((snapshot) => {
    const list = [];
    snapshot.forEach(doc => list.push(doc.data()));
    setter(list);
  });
};

export const getFiles = (setter) => snapDocs("files", setter)