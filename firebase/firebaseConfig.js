import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4d27DJnLKNIkjpsype5X7MgF4AZBN8_o",
  authDomain: "diary-a51c1.firebaseapp.com",
  databaseURL: "https://diary-a51c1.firebaseio.com",
  projectId: "diary-a51c1",
  storageBucket: "diary-a51c1.appspot.com",
  messagingSenderId: "1046589938977",
  appId: "1:1046589938977:web:b961875ae7056b97c7f260",
  measurementId: "G-KN5FMDPEGJ"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { firebase, auth, db };
