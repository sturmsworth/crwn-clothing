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
export const firestore = firebase.firestore();

// for google oauth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// custom functions:
export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const { uid, displayName, email } = userAuth;

  // treat this like an api call
  const userRef = firestore.doc(`users/${uid}`);

  // this is waiting for the reference to be retrieved, then it gets the snapshot
  const snapshot = await userRef.get();

  // if the snapshot (based on uid) doesn't exist, create it
  if (!snapshot.exists) {
    const createdAt = new Date();

    if (displayName) {
      const fName = displayName.split(" ")[0];
      const lName = displayName.split(" ")[1];

      try {
        await userRef.set({
          fName,
          lName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (err) {
        console.log("Error Creating User: ", err.message);
      }
    }

    try {
      await userRef.set({
        fName: additionalData.fName,
        lName: additionalData.lName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error Creating User: ", err.message);
    }
  }

  return userRef;
};

export default firebase;
