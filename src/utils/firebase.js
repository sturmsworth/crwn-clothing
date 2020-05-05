import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6qO1GXykW68l2If6fRkgNOJm50yI0GGM",
  authDomain: "crwn-clothing-cf175.firebaseapp.com",
  databaseURL: "https://crwn-clothing-cf175.firebaseio.com",
  projectId: "crwn-clothing-cf175",
  storageBucket: "crwn-clothing-cf175.appspot.com",
  messagingSenderId: "564811842443",
  appId: "1:564811842443:web:2b78faf7ddf407a233a58e",
  measurementId: "G-H945TRLTE7",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireastore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
