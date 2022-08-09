import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQV3c0ualIHELXnEpwmBG5ZNEdCas6xdI",
  authDomain: "resturant-80d8a.firebaseapp.com",
  databaseURL: "https://resturant-80d8a-default-rtdb.firebaseio.com",
  projectId: "resturant-80d8a",
  storageBucket: "resturant-80d8a.appspot.com",
  messagingSenderId: "525116796176",
  appId: "1:525116796176:web:fd591162b677f130564995",
  measurementId: "G-9PQFYBPJZK",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
// save data inserted
const firestore = getFirestore(app);
// get data 
const storage = getStorage(app);

export { app, firestore, storage };
