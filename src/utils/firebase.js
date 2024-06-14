import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";
import { getStorage, ref, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvpElgq7_vTMzKHYmTH2YEB4lQGT-qkbQ",
  authDomain: "playground-dyd.firebaseapp.com",
  databaseURL: "https://playground-dyd.firebaseio.com",
  projectId: "playground-dyd",
  storageBucket: "playground-dyd.appspot.com",
  messagingSenderId: "897789558467",
  appId: "1:897789558467:web:69aac8c4cdf459e8f4ec76",
  measurementId: "G-KY3DFXS2V6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

if (window.location.hostname === "localhost") {
  console.log("caution: develop config may give problems");
  connectFirestoreEmulator(db, "localhost", 5010)
  connectAuthEmulator(auth, "http://localhost:9099");
  connectStorageEmulator(storage, "localhost", 9199);
}

export const storageRef = ref(storage);

export const logIn = (pass, callback) => {
  signInWithEmailAndPassword(auth, "demo@gmail.com", pass)
    .then(() => callback(true))
    .catch(() => callback(false));
};

const snapDocs = (col, setter) => {
  return onSnapshot(collection(db, col), (snapshot) => {
    const list = [];
    snapshot?.forEach(doc => list.push(doc.data()));
    setter(list);
  });
};

export const getFiles = (setter) => snapDocs("files", setter);