import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDvpElgq7_vTMzKHYmTH2YEB4lQGT-qkbQ",
  authDomain: "playground-dyd.firebaseapp.com",
  databaseURL: "https://playground-dyd.firebaseio.com",
  projectId: "playground-dyd",
  storageBucket: "playground-dyd.appspot.com",
  messagingSenderId: "897789558467",
  appId: "1:897789558467:web:69aac8c4cdf459e8f4ec76",
  measurementId: "G-KY3DFXS2V6"
}

firebase.initializeApp(firebaseConfig);

if (window.location.hostname === "localhost") {
  firebase.firestore().settings({ host: "localhost:5010", ssl: false });
  firebase.auth().useEmulator("http://localhost:9099");
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
    snapshot?.forEach(doc => list.push(doc.data()));
    setter(list);
  });
};

export const getFiles = (setter) => snapDocs("files", setter)