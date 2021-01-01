import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase init
const firebaseConfig = {
  apiKey: 'AIzaSyAlZ8xt_yZ9cPJSYU3IyBWBFM2E3OnvAMs',
  authDomain: 'fir-auth-logrocket-dec20.firebaseapp.com',
  projectId: 'fir-auth-logrocket-dec20',
  storageBucket: 'fir-auth-logrocket-dec20.appspot.com',
  messagingSenderId: '1045361020810',
  appId: '1:1045361020810:web:3c3b04d19636fd272bc273',
};

firebase.initializeApp(firebaseConfig);

// auth functions
const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

// creating user doc in firestore
const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export { auth, firestore, signInWithGoogle, generateUserDocument };
